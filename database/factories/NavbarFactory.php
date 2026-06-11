<?php

namespace Database\Factories;

use App\Models\Navbar;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @template TModel of \App\Models\Navbar
 *
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<TModel>
 */
class NavbarFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<TModel>
     */
    protected $model = Navbar::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }
}
