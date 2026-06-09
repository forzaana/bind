<?php

use App\Http\Controllers\CookiePolicyController;
use App\Http\Controllers\ExpertisePageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\InquiryController;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\OurServicesPageController;
use App\Http\Controllers\PrivacyPolicyController;
use App\Http\Controllers\TermsAndConditionsController;
use Illuminate\Support\Facades\Route;

Route::post('/locale', LocaleController::class)->name('locale.change');

Route::get('/', HomePageController::class)->name('home');

Route::prefix('expertise')->controller(ExpertisePageController::class)->group(function () {
    Route::get('/', 'index')->name('expertise');
    Route::get('/{project:slug}', 'show')->name('expertise.show');
});

Route::get('/our-services', OurServicesPageController::class)->name('our-services');

Route::prefix('/connect-and-bind')->controller(InquiryController::class)->group(function () {
    Route::get('/', 'index')->name('connect-and-bind');
    Route::post('/', 'store');
});

Route::get('/privacy-policy', PrivacyPolicyController::class)->name('privacy-policy');
Route::get('/terms-and-conditions', TermsAndConditionsController::class)->name('terms-and-conditions');
Route::get('/cookie-policy', CookiePolicyController::class)->name('cookie-policy');
