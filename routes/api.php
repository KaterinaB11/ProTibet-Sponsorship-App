<?php

use App\Http\Controllers\Api\InstitutionController;
use App\Http\Controllers\Api\ReceiverController;
use App\Http\Controllers\Api\MediaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/receivers', [ReceiverController::class, 'index']);

Route::get('/receiver/{id}', [ReceiverController::class, 'show']);

Route::get('/institution/{id}', [InstitutionController::class, 'show']);

Route::get('/institutions', [InstitutionController::class, 'index']);

Route::get('/news', [MediaController::class, 'index']);