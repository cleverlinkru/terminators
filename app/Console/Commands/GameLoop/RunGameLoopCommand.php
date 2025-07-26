<?php

namespace Apps\Terminators\Console\GameLoop\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\App;
use App\GameLoop\Application\Run\RunGameLoopCommandHandler;

class RunGameLoopCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'game-loop:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run game loop';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        /** @var RunGameLoopCommandHandler $command */
        $command = App::make(RunGameLoopCommandHandler::class);
        $command->__invoke();
    }
}
