<?php
namespace App\GameLoop\Domain;

use App\GameLoop\Domain\Jobs\GameLoopJob;
use App\GameLoop\Domain\Events\GameRenderEvent;

class GameLoop
{
    const MAX_FPS = 75;
    
    public function run()
    {
        GameLoopJob::dispatch();
    }
    
    public function runLoop()
    {
        $previousTime = time();
        
        $timestep = 1 / self::MAX_FPS;
        $accumulator = 0;
        
        while (true) {
            $time = time();
            $dt = ($time - $previousTime) / 1000;
            $previousTime = $time;
            
            $accumulator += $dt;
            
            $numUpdateSteps = 0;
            while ($accumulator >= $timestep) {
                $this->update();
                
                $accumulator -= $timestep;
                
                if (++$numUpdateSteps >= 240) {
                    $accumulator = 0;
                    break;
                }
            }
            
            $this->render();
        }
    }
    
    protected function update()
    {
    }
    
    protected function render()
    {
        broadcast(new GameRenderEvent(['test' => '123']));
    }
}