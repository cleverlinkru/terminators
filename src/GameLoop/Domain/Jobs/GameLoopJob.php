<?php

namespace App\GameLoop\Domain\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use App\GameLoop\Domain\GameLoop;
use Illuminate\Support\Facades\App;

class GameLoopJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        $this->onQueue('game-loop');
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        /** @var GameLoop $gameLoop */
        $gameLoop = App::make(GameLoop::class);
        $gameLoop->runLoop();
    }
}
