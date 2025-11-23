<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PaymentSuccessMail extends Mailable
{
    use Queueable, SerializesModels;

    public $userName;
    public $amount;
    public $txnid;

    public function __construct($userName, $amount, $txnid)
    {
        $this->userName = $userName;
        $this->amount = $amount;
        $this->txnid = $txnid;
    }

    public function build()
    {
        return $this->subject('Payment Confirmation')
            ->view('emails.payment_success');
    }
}
