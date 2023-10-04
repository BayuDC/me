<script lang="ts" setup>
const ready = ref(false);
</script>

<template>
    <div>
        <ClientOnly>
            <Background @ready="ready = true" />
        </ClientOnly>
        <div
            class="h-screen flex items-center justify-center z-10 transition-[background-color] duration-1000 delay-300 relative"
            :class="[ready ? 'bg-dark/0' : 'bg-dark']"
        >
            <h1 class="font-bold text-center">
                <HeroHi />
                <HeroName />
                <HeroRole />
                <HeroNav />
            </h1>
        </div>
    </div>
</template>
