<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\Auth\AdminLoginController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\PaymentController;

// ----------------------
// Public routes
// ----------------------
Route::get('/', fn() => Inertia::render('welcome'))->name('home');



Route::get('/terms', fn() => Inertia::render('Terms'))->name('terms');
Route::get('/privacy', fn() => Inertia::render('Privacy'))->name('privacy');
Route::get('/refund-policy', fn() => Inertia::render('RefundPolicy'))->name('refund-policy');

// ----------------------
// Admin login routes
// ----------------------
Route::get('/admin/login', [AdminLoginController::class, 'showLoginForm'])->name('admin.login');


Route::get('/admin/registrations', function () {
    // Agar login hai, dashboard page render karo
    return Inertia::render('dashboard');
})->name('admin.dashboard');


// ----------------------
// Protected admin routes
// ----------------------

Route::get('/payment', fn() => Inertia::render('PaymentForm'));


Route::post('/payment/initiate', [PaymentController::class, 'initiatePayment'])->name('payment.initiate');
Route::any('/payment/callback', [PaymentController::class, 'callback'])->name('payment.callback'); // 'any' for GET/POST from Easebuzzx`

Route::post('/admin/logout', [AdminLoginController::class, 'logout'])->name('admin.logout');
Route::post('/admin/login', [AdminLoginController::class, 'login'])->name('admin.login.submit');