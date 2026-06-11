<?php

declare(strict_types=1);

namespace App\Nova;

use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use Outl1ne\NovaSortable\Traits\HasSortableRows;

class Navbar extends Resource
{
    use HasSortableRows;

    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Client>
     */
    public static string $model = \App\Models\Navbar::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * Get the fields displayed by the resource.
     *
     * @return array<int, \Laravel\Nova\Fields\Field>
     */
    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),
            Text::make('Name')
                ->required()->rules('required')
                ->translatable([
                    'en' => 'English',
                    'ar' => 'Arabic',
                ]),
            Text::make('Link')
                ->rules('required', 'in:home,expertise,our-services,connect-and-bind,privacy-policy,terms-and-conditions,cookie-policy')
                ->help('Routes is : home, expertise, our-services, connect-and-bind, privacy-policy, terms-and-conditions, cookie-policy')
                ->required(),
            Select::make('Display as', 'display')
                ->options([
                    'link' => 'Link',
                    'button' => 'Button',
                ])
                ->required(),
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
