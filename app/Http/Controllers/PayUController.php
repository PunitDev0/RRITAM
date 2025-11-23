<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\PayUHelper;

class PayUController extends Controller
{
    public function showForm()
    {
        return inertia('PayU/PaymentForm');
    }

    public function initiatePayment(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:1',
            'firstname' => 'required|string|max:50',
            'email' => 'required|email',
            'phone' => 'required|digits:10',
        ]);

        // Load ENV
        $merchantKey = env('PAYU_MERCHANT_KEY');
        $salt        = env('PAYU_SALT');
        $mode        = env('PAYU_MODE', 'sandbox');

        $baseUrl = $mode === 'production'
            ? 'https://secure.payu.in/_payment'
            : 'https://secure.payu.in/_payment';

        $txnid = 'TXN' . time() . rand(100, 999);

        $params = [
            'key' => $merchantKey,
            'txnid' => $txnid,
            'amount' => $request->amount,
            'productinfo' => 'Product Purchase',
            'firstname' => $request->firstname,
            'email' => $request->email,
            'phone' => $request->phone,
            'surl' => url(env('PAYU_SUCCESS_URL')),
            'furl' => url(env('PAYU_FAIL_URL')),
        ];

        // Generate hash
        $params['hash'] = PayUHelper::generateHash($params, $salt);

        // Return to React (Axios)
        return response()->json([
            'payuData' => [
                'paymentUrl' => $baseUrl,
                'params'     => $params,
            ]
        ]);
    }
}
