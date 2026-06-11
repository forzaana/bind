<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TermsAndConditionsController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia()->render('markdown/terms-and-conditions', [
            'content' => str()->markdown(
                (string) nova_get_setting('terms_and_conditions')
            ),
        ]);
    }
}
