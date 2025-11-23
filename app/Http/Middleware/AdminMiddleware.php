<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Use the 'admin' guard instead of default 'web'
        if (!Auth::check()) {
            return redirect('/admin/login');
        }

        return $next($request);
    }
}
