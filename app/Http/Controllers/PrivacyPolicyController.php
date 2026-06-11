<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrivacyPolicyController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia()->render('markdown/privacy-policy', [
            'content' => str()->markdown(
                (string) nova_get_setting('privacy_policy')
            ),
        ]);
    }
}
