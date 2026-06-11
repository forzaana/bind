<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CookiePolicyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia()->render('markdown/cookie-policy', [
            'content' => str()->markdown(
                (string) nova_get_setting('cookie_policy')
            ),
        ]);
    }
}
