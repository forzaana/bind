<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Action\CreateInquiry;
use App\Http\Requests\StoreInquiryRequest;

class InquiryController extends Controller
{
    public function index()
    {
        return inertia('connect-and-bind/index');
    }

    public function store(StoreInquiryRequest $request, CreateInquiry $inquiry)
    {
        try {
            $inquiry->handle($request->validated());

            return back()->with([
                'title' => 'Success',
                'message' => 'We have received your request. We will contact you soon.',
                'type' => 'success',
            ]);
        } catch (\Throwable $th) {
            logger()->error($th->getMessage());

            return back()->with([
                'title' => 'Error',
                'message' => 'Unable to process your request.',
                'type' => 'danger',
            ]);
        }
    }
}
