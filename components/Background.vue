<script lang="ts" setup>
import { loadStarsPreset } from 'tsparticles-preset-stars';

const emits = defineEmits<{
    (e: 'ready'): void;
}>();

const particlesOptions = {
    preset: 'stars',
    background: {
        color: '#080808',
    },
    particles: {
        number: {
            value: 120,
        },
    },
};

async function particlesInit(engine: any) {
    await loadStarsPreset(engine);
}
function particlesLoaded(container: any) {
    emits('ready');
}
</script>

<template>
    <Particles
        id="pretty-bg"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="particlesOptions"
    />
</template>

<style scoped></style>
