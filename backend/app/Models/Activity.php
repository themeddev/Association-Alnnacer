<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'date',
        'location',
        'type_id', // Update to include foreign key
    ];

    public function activityType()
    {
        return $this->belongsTo(Type::class, 'type_id');
    }
}