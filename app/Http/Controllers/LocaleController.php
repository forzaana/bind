<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class LocaleController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $locale = $request->get('locale', 'en');
        if (in_array($locale, available_locales(), true)) {
            Session::put('locale', $locale);
        }

        return redirect()->back();
    }
}
