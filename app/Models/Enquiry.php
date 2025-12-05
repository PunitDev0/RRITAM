<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enquiry extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}