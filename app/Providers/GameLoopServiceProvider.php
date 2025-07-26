<?php

namespace Apps\Terminators\Providers;

use Illuminate\Support\ServiceProvider;
use Apps\Terminators\Console\GameLoop\Commands\RunGameLoopCommand;

class GameLoopServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->commands([
            RunGameLoopCommand::class,
        ]);
    }
}
