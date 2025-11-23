<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegistrationConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $registration;
    public $rm;

    /**
     * Create a new message instance.
     */
    public function __construct($registration, $rm)
    {
        $this->registration = $registration;
        $this->rm = $rm;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject('Aaranya Greens Registration Confirmation')
                    ->view('emails.registration_confirmation');
    }
}
