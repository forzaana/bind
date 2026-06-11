<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\CarouselResource;
use App\Http\Resources\ClientResource;
use App\Models\Carousel;
use App\Models\Client;
use App\Models\Project;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function __invoke()
    {
        return inertia('home/index', [
            'carousels' => Inertia::defer(function () {
                $carousels = Carousel::query()->with('media')
                    ->where('is_active', true)
                    ->inRandomOrder()->get();

                return CarouselResource::collection($carousels);
            }),
            'clients' => Inertia::defer(function () {
                $clients = Client::query()->with('media')->orderBy('sort_order', 'asc')->get();

                return ClientResource::collection($clients);
            }),
            'projects' => Inertia::defer(function () {
                return Project::query()->with('media')->where('is_active', true)->get();
            }),
        ]);
    }
}
