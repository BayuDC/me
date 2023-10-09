<script lang="ts" setup>
const props = defineProps<{
    name: string;
    description: string;
    imgUrl: string;
}>();

import { useMotion } from '@vueuse/motion';

const target = ref<HTMLElement>();

useMotion(target, {
    initial: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1, transition: { delay: Math.random() * 600 } },
});
</script>

<template>
    <li class="h-full" ref="target">
        <div
            class="h-full border-2 group hover:border-secondary hover:scale-105 border-light transition duration-200 rounded-xl bg-dark over grid grid-rows-[auto_1fr] overflow-hidden"
        >
            <div class="border-b-2 group-hover:border-secondary border-light transition duration-200 overflow-hidden">
                <img class="block transition duration-200" :src="imgUrl" alt="" />
            </div>
            <div class="p-4 flex flex-col">
                <h2 class="font-bold text-xl">{{ name }}</h2>
                <p class="text-sm text-light-weak mt-1">{{ description }}</p>
            </div>
        </div>
    </li>
</template>

<style scoped></style>
