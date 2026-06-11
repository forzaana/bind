<?php

if (! function_exists('available_locales')) {
    /**
     * Get the available locales from the config.
     */
    function available_locales(): array
    {
        return explode(',', config('app.available_locales', 'en,ar'));
    }
}
