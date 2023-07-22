<script lang="ts" setup>
const ready = ref(false);
</script>

<template>
    <div>
        <Background @ready="ready = true" />
        <div
            class="min-h-screen flex items-center justify-center relative z-10 transition-[background-color] duration-1000 delay-300"
            :class="[ready ? 'bg-dark/0' : 'bg-dark']"
        >
            <h1 class="font-bold text-center">
                <HeroHi />
                <HeroName />
                <HeroRole />
            </h1>
        </div>
    </div>
</template>
