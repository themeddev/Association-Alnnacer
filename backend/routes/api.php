<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\AuthController;



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'userDetails']);
});

Route::controller(AuthController::class)->group(function () {
    Route::post('signup', 'signup');
    Route::post('login', 'login');
});

Route::apiResource('activities', ActivityController::class);
Route::get('/recentActivities', [ActivityController::class, 'getRecentActivities']);
// Route::put('/activity/{id}', [ActivityController::class, 'update']);
Route::get('/activity/{id}', [ActivityController::class, 'getActivitybyId']);
Route::get('/activityTypes', [TypeController::class, 'index']);
