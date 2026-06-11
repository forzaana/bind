<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\SortableTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Carousel extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia, SortableTrait;

    protected $fillable = [
        'sort_order',
        'name',
        'type',
        'is_active',
    ];

    protected $appends = [
        'media_url',
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

    public function getMediaUrlAttribute(): ?string
    {
        return $this->media()->first()?->original_url ?? null;
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('carousel_thumb')
            ->width(368)
            ->height(232)
            ->extractVideoFrameAtSecond(1);
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('carousel')->useDisk('s3')->singleFile();
        $this->addMediaCollection('carousel_collection')->useDisk('s3');
    }
}
