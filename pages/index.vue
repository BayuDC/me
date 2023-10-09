<script lang="ts" setup>
definePageMeta({
    layout: 'empty',
});

const ready = useReady();
</script>

<template>
    <div>
        <div
            :class="[ready.state1 ? 'bg-dark/0' : 'bg-dark']"
            class="transition-[background-color] duration-[600ms] delay-200 z-10 relative"
            @transitionend="ready.state2 = true"
        >
            <div class="min-h-screen flex items-center justify-center">
                <h1 class="font-bold text-center">
                    <HeroHi />
                    <HeroName />
                    <HeroRole />
                </h1>
            </div>
        </div>
        <Navbar class="bottom-0 border-t-2" :class="{ 'z-10': ready.state2 }" />
    </div>
</template>
