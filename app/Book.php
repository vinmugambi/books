<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $guard = [];

    public function category(){
       return $this->belongsTo(Category::class);
    }
}
