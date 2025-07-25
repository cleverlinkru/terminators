<?php

use Illuminate\Support\Facades\Route;
use Apps\Terminators\Events\GameUpdateEvent;

Route::inertia('', 'Index');

Route::get('test', function () {
    broadcast(new GameUpdateEvent(['test' => '123']));
});
