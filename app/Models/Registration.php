<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $fillable = [
        'applicant_name',
        'father_or_husband_name',
        'dob',
        'phone',
        'email',
        'aadhaar',
        'pan',
        'address',
        'city',
        'pincode',
        'state',
        'quota',
        'size',
        'rmcode',
        'terms',
        'status'
    ];
      public function payment()
    {
        return $this->hasOne(Payment::class, 'registration_id', 'id');
    }

    protected $casts = [
        'terms' => 'boolean',
        'created_at' => 'datetime',
    ];
}