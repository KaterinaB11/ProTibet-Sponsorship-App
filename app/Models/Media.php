<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'path', 'type', 'headline'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function receiver()
    {
        return $this->belongsTo(Receiver::class);
    }

    public function institution()
    {
        return $this->belongsTo(Institution::class);
    }
    
}
