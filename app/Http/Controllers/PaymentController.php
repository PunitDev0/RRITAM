<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Easebuzz\Easebuzz;
use App\Models\Payment;
use App\Models\Registration;
use App\Mail\RegistrationConfirmation;
use Illuminate\Support\Facades\Mail;

class PaymentController extends Controller
{
    public function showPaymentForm()
    {
        return Inertia::render('PaymentForm');
    }

    public function initiatePayment(Request $request)
    {
        $validated = $request->validate([
            'amount' => 'required|numeric|min:1',
            'email' => 'required|email',
            'phone' => 'required|string|size:10',
            'productinfo' => 'required|string|max:255',
            'firstname' => 'required|string|max:255',
            'address1' => 'nullable|string|max:255',
            'address2' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'zipcode' => 'nullable|string|max:10',
        ]);

        try {
            $MERCHANT_KEY = env('EASEBUZZ_KEY');
            $SALT = env('EASEBUZZ_SALT');
            $ENV = env('EASEBUZZ_ENV', 'prod');

            if (!$MERCHANT_KEY || !$SALT) {
                throw new \Exception('Easebuzz credentials missing in .env.');
            }

            $easebuzz = new Easebuzz($MERCHANT_KEY, $SALT, $ENV);
            $txnid = 'TXN_' . time() . '_' . rand(1000, 9999);

            $postData = [
                'txnid' => $txnid,
                'amount' => number_format($validated['amount'], 2, '.', ''),
                'firstname' => $validated['firstname'],
                'email' => $validated['email'],
                'phone' => $validated['phone'],
                'productinfo' => $validated['productinfo'],
                'surl' => route('payment.callback'),
                'furl' => route('payment.callback'),
                'udf1' => '',
                'udf2' => '',
                'udf3' => '',
                'udf4' => '',
                'udf5' => '',
                'address1' => $validated['address1'] ?? '',
                'address2' => $validated['address2'] ?? '',
                'city' => $validated['city'] ?? '',
                'state' => $validated['state'] ?? '',
                'country' => $validated['country'] ?? 'India',
                'zipcode' => $validated['zipcode'] ?? '',
            ];

            Log::info('Easebuzz Payment Initiation', ['postData' => $postData]);

            $result = $easebuzz->initiatePaymentAPI($postData, false);

            Log::info('Easebuzz Payment Response', ['result' => $result]);

            $resultData = json_decode($result, true);
            if (isset($resultData['status']) && $resultData['status'] == 1 && isset($resultData['access_key'])) {
                return response()->json([
                    'success' => true,
                    'message' => 'Payment initiated successfully.',
                    'payment_url' => 'https://pay.easebuzz.in/pay/' . $resultData['access_key']
                ], 200);
            } else {
                throw new \Exception('Payment initiation failed: Invalid response.');
            }
        } catch (\Exception $e) {
            Log::error('Easebuzz Payment Error', ['message' => $e->getMessage()]);

            return response()->json([
                'success' => false,
                'message' => 'Something went wrong. Please try again later.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function callback(Request $request)
    {
        try {
            $txnid = $request->txnid ?? '';
            $status = $request->status ?? '';
            $udf1 = $request->udf1 ?? '';

            // Find payment
            $payment = Payment::where('txnid', $txnid)->firstOrFail();
            $registration = $payment->registration;

            // Determine payment & registration status
            if ($status === 'success') {
                $paymentStatus = 'success';
                $regStatus = 'paid';
            } elseif (in_array($status, ['failed', 'userCancelled'])) {
                $paymentStatus = 'failed';
                $regStatus = 'cancelled';
            } else {
                $paymentStatus = 'pending';
                $regStatus = 'pending';
            }

            // Update payment & registration
            $payment->update([
                'status' => $paymentStatus,
                'response_data' => $request->all(),
            ]);

            $registration->update(['status' => $regStatus]);

            // Optional: update registration via udf1 if needed
            if ($udf1 && !$payment->registration_id) {
                $reg = Registration::find($udf1);
                if ($reg) $reg->update(['status' => $regStatus]);
            }

            // Send confirmation email if payment successful
            if ($paymentStatus === 'success') {
                // RM Mapping
                $rmMapping = [
                    'DD-0031' => ['name' => 'ANIL SINGH', 'phone' => '9319493090'],
                    'DD-1555' => ['name' => 'DHANANJAY ARYA', 'phone' => '9540556642'],
                    'DD-0024' => ['name' => 'SAGAR GOLA', 'phone' => '8449987175'],
                    'DD-0792' => ['name' => 'ADITYA SINGH', 'phone' => '7988808542'],
                    'DD-1979' => ['name' => 'PRAVEEN SHIKHAWAT', 'phone' => '9306002013'],
                    'DD-0577' => ['name' => 'DEEPAK SINGH', 'phone' => '7494941002'],
                    'DD-1018' => ['name' => 'POONAM YADAV', 'phone' => '8800710249'],
                    'DD-2602' => ['name' => 'SACHIN KHALDALWAL', 'phone' => '9971331667'],
                    'DD-3169' => ['name' => 'Kunal Sharma', 'phone' => '9999355215'],
                    'DD-2010' => ['name' => 'Anil kumar sharma', 'phone' => '9760011123'],
                    'DD-1562' => ['name' => 'Shanaya Kaur', 'phone' => '8076127927'],
                ];

                $rm = $rmMapping[$registration->rmcode] ?? ['name' => 'Not Assigned', 'phone' => 'Not Available'];

                Mail::to($registration->email)->send(new RegistrationConfirmation($registration, $rm));
          
            }

            // Redirect with appropriate message
            $message = match ($paymentStatus) {
                'success' => 'Payment successful!',
                'failed' => $status === 'userCancelled' ? 'Payment cancelled by user.' : 'Payment failed.',
                default => 'Payment pending.',
            };

            return redirect('/')->with('payment_message', $message);
        } catch (\Exception $e) {
            return redirect('/')->with('payment_message', 'Payment processing failed.');
        }
    }
}
