<?php

namespace App\GameLoop\Application\Run;

use App\GameLoop\Domain\GameLoop;

class RunGameLoopCommandHandler
{
    public function __construct(
        protected GameLoop $gameLoop,
    )
    {
    }
    
    public function __invoke()
    {
        $this->gameLoop->run();
    }
}