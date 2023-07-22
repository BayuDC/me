<script lang="ts" setup></script>

<template>
    <div class="min-h-screen flex items-center justify-center">
        <h1 class="font-bold text-center">
            <div class="text-light-weak md:text-[24px] sm:text-[22px] text-[16px] mb-[20px]">Hello, I'm</div>
            <div
                class="text-transparent md:text-[144px] md:leading-[192px] sm:text-[132px] sm:leading-[176px] text-[64px] leading-[88px] gradient-white bg-clip-text"
            >
                BayuDC
            </div>
            <div
                class="text-transparent md:text-[48px] sm:text-[44px] text-[26px] mt-[40px] gradient-blue-pink bg-clip-text"
            >
                A Web Developer
            </div>
        </h1>
    </div>
</template>

<style>
.gradient-white {
    background-image: linear-gradient(
        45deg,
        theme('colors.primary') -200%,
        theme('colors.light'),
        theme('colors.secondary') 300%
    );
}
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
