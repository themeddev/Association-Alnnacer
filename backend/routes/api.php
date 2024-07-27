<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActivityController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


Route::middleware(['auth:sanctum', 'isAdmin'])->group(function () {
    
    Route::controller(UserController::class)->group(function () {
        Route::get('/user', 'userDetails');
        Route::get('/users', 'getAllUsers'); // all users
        Route::post('/users', 'createUser'); // Create user
        Route::put('/users/{id}', 'updateUser'); // Update user
        Route::delete('/users/{id}', 'deleteUser'); // Delete user
    });


});

Route::controller(AuthController::class)->group(function () {
    Route::post('signup', 'signup');
    Route::post('login', 'login');
});


Route::apiResource('activities', ActivityController::class);
Route::get('/recentActivities', [ActivityController::class, 'getRecentActivities']);
Route::get('/activity/{id}', [ActivityController::class, 'getActivitybyId']);
Route::get('/activityTypes', [TypeController::class, 'index']);
