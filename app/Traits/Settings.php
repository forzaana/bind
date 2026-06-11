<?php

declare(strict_types=1);

namespace App\Traits;

use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\Image;
use Laravel\Nova\Fields\Markdown;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Fields\Trix;
use Laravel\Nova\Fields\URL;
use Laravel\Nova\Tabs\Tab;
use Outl1ne\NovaSettings\NovaSettings;

trait Settings
{
    protected function appendNovaSettings(): void
    {
        NovaSettings::addSettingsFields([
            Tab::group('General Settings', [
                Tab::make('General', [
                    Text::make(__('Site Title'), 'site_title')
                        ->rules(['required'])
                        ->fullWidth(),

                    Boolean::make(__('Enable Multi-Language'), 'enable_multi_language')
                        ->rules(['required'])
                        ->fullWidth(),

                    Boolean::make(__('Enable Newsletter'), 'enable_newsletter')
                        ->rules(['required'])
                        ->fullWidth(),

                    Boolean::make(__('Enable Inquiries'), 'enable_inquiries')
                        ->rules(['required'])
                        ->fullWidth(),
                ]),

                Tab::make('Company Information', [
                    Trix::make(__('Address'), 'address')
                        ->translatable([
                            'en' => 'English',
                            'ar' => 'Arabic',
                        ])
                        ->rules(['nullable', 'max:1000'])
                        ->fullWidth(),
                    Email::make(__('Email'), 'email')
                        ->rules(['nullable', 'email', 'max:155'])
                        ->fullWidth(),
                    Text::make(__('Phone'), 'phone')
                        ->rules(['nullable', 'max:155'])
                        ->fullWidth(),
                ]),
                Tab::make('Social Media', [
                    URL::make(__('Facebook'), 'sm_facebook')
                        ->rules(['nullable', 'url'])
                        ->fullWidth(),
                    URL::make(__('Instagram'), 'sm_instagram')
                        ->rules(['nullable', 'url'])
                        ->fullWidth(),
                    URL::make(__('Snapchat'), 'sm_snapchat')
                        ->rules(['nullable', 'url'])
                        ->fullWidth(),
                    URL::make(__('Twitter'), 'sm_twitter')
                        ->rules(['nullable', 'url'])
                        ->fullWidth(),
                    URL::make(__('Youtube'), 'sm_youtube')
                        ->rules(['nullable', 'url'])
                        ->fullWidth(),
                    URL::make(__('LinkedIn'), 'sm_linkedin')
                        ->rules(['nullable', 'url'])
                        ->fullWidth(),
                    URL::make(__('TikTok'), 'sm_tiktok')
                        ->rules(['nullable', 'url'])
                        ->fullWidth(),
                    URL::make(__('Vimeo'), 'sm_vimeo')
                        ->rules(['nullable', 'url'])
                        ->fullWidth(),
                ]),
                Tab::make('Theme', [
                    Boolean::make(__('Use Transparent Navbar'), 'enable_transparent_navbar')
                        ->rules(['required'])
                        ->fullWidth(),
                ]),

            ]),
        ], [
            'enable_multi_language' => 'boolean',
            'enable_newsletter' => 'boolean',
            'enable_inquiries' => 'boolean',
            'enable_transparent_navbar' => 'boolean',
            'address' => 'array',
        ], 'general');

        NovaSettings::addSettingsFields([
            Tab::group('SEO', [
                Tab::make('General', [
                    Boolean::make(__('Allow Crawling'), 'allow_crawling')
                        ->rules(['required'])
                        ->fullWidth(),
                ]),

                Tab::make('Metadata', [
                    Textarea::make(__('Meta Description'), 'meta_description')
                        ->rules(['nullable', 'max:155'])
                        ->fullWidth(),

                    Text::make(__('Meta Keywords'), 'meta_keywords')
                        ->rules(['nullable', 'max:155'])
                        ->fullWidth(),
                ]),
                Tab::make('Open Graph', [
                    Text::make(__('Title'), 'og_title')
                        ->rules(['nullable', 'min:20'])
                        ->fullWidth(),
                    Text::make(__('Site Name'), 'og_site_name')
                        ->rules(['nullable', 'min:20'])
                        ->fullWidth(),
                    Textarea::make(__('Description'), 'og_description')
                        ->rules(['nullable', 'min:20'])
                        ->fullWidth(),
                    Image::make(__('Image'), 'og_image', 's3'),
                ]),
            ]),
        ], ['allow_crawling' => 'boolean'], 'seo');

        NovaSettings::addSettingsFields([
            Tab::group('Policies & Terms', [
                Tab::make('Privacy Policy', [
                    Markdown::make(__('Privacy Policy'), 'privacy_policy')
                        ->rules(['nullable', 'min:20'])
                        ->fullWidth(),
                ]),
                Tab::make('Terms and conditions', [
                    Markdown::make(__('Terms and conditions'), 'terms_and_conditions')
                        ->rules(['nullable', 'min:20'])
                        ->fullWidth(),
                ]),
                Tab::make('Cookie Policy', [
                    Markdown::make(__('Cookie Policy'), 'cookie_policy')
                        ->rules(['nullable', 'min:20'])
                        ->fullWidth(),
                ]),
            ]),
        ], [], 'policies');
    }
}
