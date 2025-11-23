<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\Auth\AdminLoginController;



Route::any('/payment/callback', [PaymentController::class, 'callback'])->name('payment.callback'); // 'any' for GET/POST from Easebuzzx`
Route::post('/register', [RegistrationController::class, 'store'])->name('register.store');
Route::get('/register', [RegistrationController::class, 'index'])->name('register.index');

Route::post('/registration/{id}/refund', [RegistrationController::class, 'refundPayment']);
Route::post('/enquiry', [EnquiryController::class, 'store'])->name('enquiry.store');
