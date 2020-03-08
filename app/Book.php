<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Book extends Model
{
    protected $guard = [];
    protected $fillable = ["title","author"];

    public function category(): BelongsTo {
       return $this->belongsTo(Category::class);
    }
}
