<script lang="ts" setup></script>

<template>
    <div class="min-h-screen flex items-center justify-center">
        <h1 class="font-bold text-center">
            <div class="text-light/60 text-[24px] mb-2">Hello, I'm</div>
            <div class="text-transparent text-[144px] leading-[192px] gradient-white bg-clip-text">BayuDC</div>
            <div class="text-transparent text-[48px] mt-8 gradient-blue-pink bg-clip-text">A Web Developer</div>
        </h1>
    </div>
</template>

<style>
.gradient-white {
    background-image: linear-gradient(
        45deg,
        theme('colors.secondary') -100%,
        theme('colors.light'),
        theme('colors.secondary') 200%
    );
}
.gradient-blue-pink {
    background-size: 200%;
    animation: gradient 6s linear infinite;
    background-image: linear-gradient(
        90deg,
        theme('colors.primary') 10%,
        theme('colors.secondary') 50%,
        theme('colors.secondary') 60%,
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
