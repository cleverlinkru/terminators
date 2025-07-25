<?php

namespace Apps\Terminators\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class GameUpdateEvent implements ShouldBroadcast
{
    public function __construct(public array $data)
    {
    }
    
    public function broadcastAs(): string
    {
        return "update";
    }
    
    public function broadcastOn(): Channel
    {
        return new Channel('game');
    }
}
