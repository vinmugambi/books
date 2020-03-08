<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    protected $guard = [];
    protected $fillable = ["title","author","featured"];

    public function category(): BelongsTo {
       return $this->belongsTo(Category::class);
    }
}
