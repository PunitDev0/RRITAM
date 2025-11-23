<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminLoginController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Login');
    }

public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required|string|min:6',
    ]);

    if (Auth::guard('admin')->attempt($credentials, $request->input('remember'))) {
        $request->session()->regenerate();

        // Generate a random token
        $randomToken = bin2hex(random_bytes(16)); // 32-character random token

        return response()->json([
            'success' => true,
            'message' => 'Login successful',
            'token' => $randomToken,
            'redirect' => '/admin/registrations',
        ]);
    }

    return response()->json([
        'success' => false,
        'message' => 'Invalid email or password.',
        'errors' => [
            'email' => ['Invalid email or password.'],
        ],
    ], 401);
}


    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'success' => true,
            'message' => 'Logout successful',
            'redirect' => '/admin/login',
        ]);
    }
}
