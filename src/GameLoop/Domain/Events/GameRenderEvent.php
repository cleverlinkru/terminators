<?php

namespace App\GameLoop\Domain\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class GameRenderEvent implements ShouldBroadcastNow
{
    public function __construct(public array $data)
    {
    }
    
    public function broadcastOn(): Channel
    {
        return new Channel('game-loop');
    }
    
    public function broadcastAs(): string
    {
        return 'render';
    }
}
