<?php

namespace App\Libraries;

include_once __DIR__ . '/easebuzz/easebuzz_payment_gateway.php';

use Easebuzz\Easebuzz;

class EasebuzzPayment {
    private $MERCHANT_KEY;
    private $SALT;
    private $ENV;

    public function __construct() {
        $this->MERCHANT_KEY = env('EASEBUZZ_KEY');
        $this->SALT = env('EASEBUZZ_SALT');
        $this->ENV = env('EASEBUZZ_ENV', 'test');
    }

    public function initiatePayment($postData, $redirect = true) {
        $easebuzzObj = new Easebuzz($this->MERCHANT_KEY, $this->SALT, $this->ENV);
        return $easebuzzObj->initiatePaymentAPI($postData, $redirect);
    }

    public function handleResponse($requestData) {
        $easebuzzObj = new Easebuzz(null, $this->SALT, null);
        return $easebuzzObj->easebuzzResponse($requestData);
    }
}
