<?php

declare(strict_types=1);

namespace App\Action;

use App\Models\Inquiry;

class CreateInquiry
{
    public function handle(array $attributes)
    {
        return Inquiry::query()->create($attributes);
    }
}
