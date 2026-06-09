<?php

declare(strict_types=1);

namespace App\Traits;

use App\Nova\Carousel;
use App\Nova\Client;
use App\Nova\Dashboards\Main;
use App\Nova\Inquiry;
use App\Nova\Navbar;
use App\Nova\Project;
use App\Nova\User;
use Illuminate\Http\Request;
use Laravel\Nova\Exceptions\NovaException;
use Laravel\Nova\Menu\MenuItem;
use Laravel\Nova\Menu\MenuSection;
use Laravel\Nova\Nova;

trait Menus
{
    public function appendNovaMenus(): void
    {
        Nova::mainMenu(function (Request $request) {
            return $this->staffMenu();
        });
    }

    /**
     * Staff Menu
     *
     * @throws NovaException
     */
    private function staffMenu(): array
    {
        return [
            MenuSection::dashboard(Main::class)
                ->icon('chart-bar'),

            MenuSection::resource(Navbar::class)
                ->icon('adjustments-horizontal'),

            MenuSection::make(__('Content'), [
                MenuItem::resource(Carousel::class),
                MenuItem::resource(Project::class),
                MenuItem::resource(Client::class),
            ])->icon('archive-box')->collapsable(),

            MenuSection::resource(Inquiry::class)
                ->icon('chat-bubble-oval-left-ellipsis'),

            MenuSection::make(__('Users'), [
                MenuItem::resource(User::class),
            ])->icon('user')->collapsable(),

            MenuSection::make(__('Settings'), [
                MenuItem::link(__('General'), 'settings/general'),
                MenuItem::link(__('SEO'), 'settings/seo'),
                MenuItem::link(__('Policies'), 'settings/policies'),
            ])->icon('cog')->collapsable(),
        ];
    }
}
