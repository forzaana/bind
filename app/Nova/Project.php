<?php

declare(strict_types=1);

namespace App\Nova;

use Ebess\AdvancedNovaMediaLibrary\Fields\Images;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Date;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Repeater;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Tabs\Tab;
use Outl1ne\NovaSortable\Traits\HasSortableRows;

class Project extends Resource
{
    use HasSortableRows;

    /**
     * The model the resource corresponds to.
     */
    public static string $model = \App\Models\Project::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * Get the fields displayed by the resource.
     */
    public function fields(NovaRequest $request): array
    {
        return [
            Tab::group(null, [
                Tab::make('Details', [
                    ID::make()->sortable(),

                    Text::make('Title', 'title')
                        ->translatable([
                            'en' => 'English',
                            'ar' => 'Arabic',
                        ])
                        ->required()->rules('required'),
                    Textarea::make('Description', 'description')
                        ->translatable([
                            'en' => 'English',
                            'ar' => 'Arabic',
                        ])
                        ->required()->rules('required'),
                    Date::make('Date')->required()->rules('required'),

                    Text::make('Location', 'location')
                        ->translatable([
                            'en' => 'English',
                            'ar' => 'Arabic',
                        ])
                        ->required()->rules('required'),

                    Images::make('Cover', 'cover')
                        ->required()->rules('required'),

                    Boolean::make('Is active')->default(true)->hideWhenCreating(),
                    DateTime::make('Created At')->hideFromIndex()->exceptOnForms(),
                ]),
                Tab::make('Gallery', [
                    Images::make('Gallery', 'gallery')
                        ->required()->rules('required'),
                ]),
                Tab::make('Scop of work', [
                    Textarea::make('Scope Description', 'scope_description')
                        ->rules('nullable'),

                    Repeater::make('Scopes', 'scopes')
                        ->repeatables([
                            Repeaters\ScopeItem::make(),
                        ]),
                ]),
            ]),
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
