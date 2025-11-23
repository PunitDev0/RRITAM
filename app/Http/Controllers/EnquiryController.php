<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class EnquiryController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        // Validate request
        $validated = $request->validate([
            'name'  => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|digits:10',
        ]);

        try {
            Enquiry::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Enquiry submitted successfully!',
            ], 201); // 201 Created
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error: ' . $e->getMessage(),
            ], 500); // 500 Internal Server Error
        }
    }
}
