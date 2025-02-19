<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('welcome'); // Use 'welcome.blade.php' instead of 'app.blade.php'
})->where('any', '.*');

