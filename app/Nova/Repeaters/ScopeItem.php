<?php

declare(strict_types=1);

namespace App\Nova\Repeaters;

use Laravel\Nova\Fields\Repeater\Repeatable;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class ScopeItem extends Repeatable
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Project>
     */
    public static $model = \App\Models\Project::class;

    /**
     * Get the fields displayed by the repeatable.
     *
     * @return array<int, \Laravel\Nova\Fields\Field>
     */
    public function fields(NovaRequest $request): array
    {
        return [
            Text::make('Scope Item', 'scops')
//                ->translatable([
//                    'en' => 'English',
//                    'ar' => 'Arabic',
//                ])
                ->required()
                ->rules('required'),
        ];
    }
}
