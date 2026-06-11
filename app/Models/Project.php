<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\EloquentSortable\SortableTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Spatie\Translatable\HasTranslations;

class Project extends Model implements HasMedia
{
    use HasFactory;
    use HasSlug, InteractsWithMedia, SortableTrait;
    use HasTranslations;

    protected $fillable = [
        'sort_order',
        'title',
        'description',
        'scope_description',
        'location',
        'date',
        'scopes',
        'is_active',
    ];

    protected $appends = [
        'cover_url',
    ];

    protected array $translatable = [
        'title',
        'description',
        'location',
    ];

    public function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'date' => 'date:M, Y',
            'scopes' => 'array',
            'title' => 'array',
            'description' => 'array',
            'location' => 'array',
        ];
    }

    public array $sortable = [
        'order_column_name' => 'sort_order',
        'sort_when_creating' => true,
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom(function () {
                return $this->getTranslation('title', 'en'); // or a fixed locale like 'en'
            })
            ->saveSlugsTo('slug');
    }

    public function getCoverUrlAttribute(): ?string
    {
        return $this->getFirstMediaUrl('cover');
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('cover_thumb');
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('cover')->useDisk('s3')->singleFile();
        $this->addMediaCollection('scope_icon')->useDisk('s3')->singleFile();
        $this->addMediaCollection('gallery')->useDisk('s3');
    }
}
