<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActivityController;    

Route::get('/', function () {
    return view('welcome');
});

// Route::resource('activities', ActivityController::class);
