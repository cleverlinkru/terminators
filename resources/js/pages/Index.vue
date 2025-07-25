<script setup lang="ts">
import '@/lib/main.ts';
import Game from "@/lib/core/Game";
import { useEchoPublic } from "@laravel/echo-vue";

useEchoPublic(
    "game",
    ".update",
    (e) => {
		Game.instance().getGameLoop().update(e.data);
    },
).listen();
</script>

<template>
</template>

<style>
html,
body,
canvas {
	width: 100%;
	height: 100%;
}
</style>