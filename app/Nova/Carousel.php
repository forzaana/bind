<?php

declare(strict_types=1);

namespace App\Nova;

use Ebess\AdvancedNovaMediaLibrary\Fields\Media;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use Outl1ne\NovaSortable\Traits\HasSortableRows;

class Carousel extends Resource
{
    use HasSortableRows;

    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Carousel>
     */
    public static string $model = \App\Models\Carousel::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),
            Text::make('Name')->required()->rules('required'),

            Media::make('Image/Video', 'carousel') // media handles videos
                ->conversionOnIndexView('carousel_thumb')
                ->singleMediaRules('max:50000'), // max 5000kb

            // validation rules
            Select::make('Type')
                ->options([
                    'image' => 'Image',
                    'video' => 'Video',
                ])->required()
                ->rules('required')
                ->displayUsingLabels(),
            Boolean::make('Is active')->default(true)->hideWhenCreating(),
            DateTime::make('Created At')->hideFromIndex()->exceptOnForms(),
        ];
    }

    /**
     * Get the cards available for the resource.
     *
     * @return array<int, \Laravel\Nova\Card>
     */
    public function cards(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @return array<int, \Laravel\Nova\Filters\Filter>
     */
    public function filters(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @return array<int, \Laravel\Nova\Lenses\Lens>
     */
    public function lenses(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @return array<int, \Laravel\Nova\Actions\Action>
     */
    public function actions(NovaRequest $request): array
    {
        return [];
    }
}
