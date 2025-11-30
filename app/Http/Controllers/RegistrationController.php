<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Easebuzz\Easebuzz;

class RegistrationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'applicant_name' => 'required|string|max:255',
            'father_or_husband_name' => 'required|string|max:255',
            'dob' => 'required|date',
            'phone' => 'required|digits:10',
            'email' => 'required|email|max:255',
            'aadhaar' => 'nullable|string|size:12',
            'pan' => 'required|string|regex:/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/',
            'address' => 'required|string|max:500',
            'city' => 'required|string|max:100',
            'pincode' => 'required|digits:6',
            'state' => 'required|string|max:100',
            'quota' => 'required|string',
            'size' => 'required|string',
            'rmcode' => 'required|string|max:50',
            'terms' => 'required|accepted',
        ]);

        try {
            // Save registration
            $registration = Registration::create(array_merge($validated, [
                'status' => 'pending'
            ]));

            // Initiate payment
            $amount = 31000.00;
            $productinfo = 'EOI';

            $paymentUrl = $this->initiatePaymentForRegistration(
                $registration->id,
                $validated['applicant_name'],
                $validated['email'],
                $validated['phone'],
                $amount,
                $productinfo,
                $validated
            );

            // if (!$paymentUrl) {
            //     throw new \Exception('Payment initiation failed.');
            // }

            return response()->json([
                'success' => true,
                'message' => 'Registration saved! Redirecting to payment...',
                'data' => $registration,
                'payment_url' => $paymentUrl
            ], 201);

        } catch (\Exception $e) {
            Log::error('Registration Error', [
                'message' => $e->getMessage(),
                'data' => $validated
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Registration failed: ' . $e->getMessage()
            ], 500);
        }
    }

    private function initiatePaymentForRegistration($registrationId, $firstname, $email, $phone, $amount, $productinfo, $validatedData)
    {
        try {
            $MERCHANT_KEY = env('EASEBUZZ_KEY');
            $SALT = env('EASEBUZZ_SALT');
            $ENV = env('EASEBUZZ_ENV', 'prod');

            if (!$MERCHANT_KEY || !$SALT) {
                throw new \Exception('Easebuzz credentials missing in .env.');
            }

            $easebuzz = new Easebuzz($MERCHANT_KEY, $SALT, $ENV);
            $txnid = 'TXN_' . $registrationId . '_' . time() . '_' . rand(1000, 9999);

            $postData = [
                'txnid' => $txnid,
                'amount' => number_format($amount, 2, '.', ''),
                'firstname' => $firstname,
                'email' => $email,
                'phone' => $phone,
                'productinfo' => $productinfo,
                'surl' => route('payment.callback'),
                'furl' => route('payment.callback'),
                'udf1' => (string) $registrationId,
                'address1' => $validatedData['address'] ?? '',
                'city' => $validatedData['city'] ?? '',
                'state' => $validatedData['state'] ?? '',
                'country' => 'India',
                'zipcode' => $validatedData['pincode'] ?? '',
            ];
            dd($postData);

            Log::info('Easebuzz Payment Initiation', ['registration_id' => $registrationId, 'postData' => $postData]);
            $result = $easebuzz->initiatePaymentAPI($postData, false);
            Log::info('Easebuzz Response', ['result' => $result]);

            $resultData = json_decode($result, true);
            if (isset($resultData['status']) && $resultData['status'] == 1 && isset($resultData['access_key'])) {
                Payment::create([
                    'registration_id' => $registrationId,
                    'txnid' => $txnid,
                    'amount' => $amount,
                    'status' => 'pending',
                    'response_data' => $resultData,
                ]);
                return 'https://pay.easebuzz.in/pay/' . $resultData['access_key'];
            }

            throw new \Exception('Invalid response from Easebuzz.');
        } catch (\Exception $e) {
            Log::error('Payment Initiation Error', ['message' => $e->getMessage()]);
            return null;
        }
    }

    public function index()
    {
        $registrations = Registration::with('payment')->latest()->get();
        return response()->json([
            'success' => true,
            'message' => 'Registrations fetched.',
            'data' => $registrations
        ], 200);
    }
}