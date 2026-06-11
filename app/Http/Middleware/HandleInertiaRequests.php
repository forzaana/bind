<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Models\Navbar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'title' => fn () => session('title'),
                'message' => fn () => session('message'),
                'type' => fn () => session('type'),
            ],
            'settings' => [
                'enable_multi_language' => fn () => nova_get_setting('enable_multi_language'),
                'enable_newsletter' => fn () => nova_get_setting('enable_newsletter'),
                'enable_inquiries' => fn () => nova_get_setting('enable_inquiries'),
                'enable_transparent_navbar' => fn () => nova_get_setting('enable_transparent_navbar'),
            ],
            'info' => [
                'title' => fn () => nova_get_setting('site_title'),
                'address' => fn () => nova_get_setting('address'),
                'phone' => fn () => nova_get_setting('phone'),
                'email' => fn () => nova_get_setting('email'),
            ],
            'navbar' => fn () => Navbar::query()->where('is_active', true)->orderBy('sort_order', 'asc')->get(),
            'social' => [
                'facebook' => fn () => nova_get_setting('sm_facebook'),
                'instagram' => fn () => nova_get_setting('sm_instagram'),
                'snapchat' => fn () => nova_get_setting('sm_snapchat'),
                'twitter' => fn () => nova_get_setting('sm_twitter'),
                'youtube' => fn () => nova_get_setting('sm_youtube'),
                'linkedin' => fn () => nova_get_setting('sm_linkedin'),
                'tiktok' => fn () => nova_get_setting('sm_tiktok'),
                'vimeo' => fn () => nova_get_setting('sm_vimeo'),
            ],
            'locale' => fn () => App::getLocale(),
            'translations' => $this->getTranslations(),
        ];
    }

    /**
     * Get the translations from the JSON file.
     */
    protected function getTranslations(): array
    {
        $locale = Session::get('locale', config('app.locale'));

        return cache()->rememberForever("translations_{$locale}", function () use ($locale) {
            $path = lang_path("$locale.json");

            if (file_exists($path)) {
                return json_decode(file_get_contents($path), true) ?? [];
            }

            return [];
        });

    }
}
