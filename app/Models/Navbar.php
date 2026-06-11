<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\SortableTrait;
use Spatie\Translatable\HasTranslations;

class Navbar extends Model
{
    use HasFactory;
    use HasTranslations, SortableTrait;

    protected $fillable = [
        'sort_order',
        'name',
        'link',
        'display',
        'is_active',
    ];

    protected array $translatable = [
        'name',
    ];

    public function casts(): array
    {
        return [
            'is_active',
        ];
    }

    public array $sortable = [
        'order_column_name' => 'sort_order',
        'sort_when_creating' => true,
    ];
}
