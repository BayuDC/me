<script lang="ts" setup></script>

<template>
    <div
        v-motion-slide-top
        class="text-transparent md:text-[48px] sm:text-[44px] text-[26px] mt-[40px] gradient-blue-pink bg-clip-text"
    >
        A Web Developer
    </div>
</template>

<style>
.gradient-blue-pink {
    background-size: 200%;
    animation: gradient 6s linear infinite;
    background-image: linear-gradient(
        90deg,
        theme('colors.primary') 10%,
        theme('colors.secondary') 50%,
        theme('colors.secondary') 55%,
        theme('colors.primary') 100%
    );
}

@keyframes gradient {
    0% {
        background-position: -50% 50%;
    }
    100% {
        background-position: 150% 50%;
    }
}
</style>
