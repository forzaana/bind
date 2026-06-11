<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpertisePageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request)
    {
        return inertia()->render('expertise/index', [
            'projects' => Inertia::defer(function () {
                return Project::query()->with('media')->where('is_active', true)->get();
            }),
        ]);
    }

    public function show(Project $project)
    {
        return inertia()->render('expertise/show', [
            'project' => $project,
        ]);
    }
}
