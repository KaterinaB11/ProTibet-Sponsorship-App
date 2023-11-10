<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'VS_institution', 'location', 'about', 'type'];

    public function receivers()
    {
        return $this->hasMany(Receiver::class);
    }

    public function media()
    {
        return $this->hasMany(Media::class);
    }
}
