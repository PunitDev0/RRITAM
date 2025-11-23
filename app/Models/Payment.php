<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'registration_id',
        'txnid',
        'amount',
        'status',
        'response_data',
    ];

    protected $casts = [
        'response_data' => 'array',
    ];

    public function registration()
    {
        return $this->belongsTo(Registration::class);
    }
}