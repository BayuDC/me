<script lang="ts" setup></script>

<template>
    <div
        class="text-transparent md:text-[144px] md:leading-[192px] sm:text-[132px] sm:leading-[176px] text-[64px] leading-[88px] gradient-white bg-clip-text"
    >
        BayuDC
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
</style>
