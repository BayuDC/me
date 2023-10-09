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
    enter: { opacity: 1, scale: 1, transition: { delay: Math.random() * 300 } },
});
</script>

<template>
    <li class="h-full" ref="target">
        <div
            class="h-full border-2 group hover:border-secondary hover:scale-[1.02] border-light transition duration-200 rounded-xl bg-dark over grid grid-rows-[auto_1fr] overflow-hidden"
        >
            <div class="border-b-2 group-hover:border-secondary border-light transition duration-200 overflow-hidden">
                <img class="block transition duration-200" :src="imgUrl" alt="" />
            </div>
            <div class="p-4 flex flex-col">
                <div class="flex items-center gap-1">
                    <h2 class="font-bold text-2xl mr-auto">{{ name }}</h2>
                    <NuxtLink class="hover:scale-[1.10] transition" to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                            />
                        </svg>
                    </NuxtLink>

                    <NuxtLink class="hover:scale-[1.10] transition" to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                            <g fill="currentColor">
                                <path d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414l-6 6Z" />
                                <path
                                    d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10h10Zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0v4Z"
                                />
                                <path d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4Z" />
                            </g>
                        </svg>
                    </NuxtLink>
                </div>

                <p class="text-sm text-light-weak mt-2">{{ description }}</p>
                <!-- <div class="h-4"></div>
                <div class="flex gap-3 mt-auto justify-end text-sm">
                    <NuxtLink to="#" class="flex items-center gap-1">
                        <span class="font-bold underline">Visit</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g fill="currentColor">
                                <path d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414l-6 6Z" />
                                <path
                                    d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10h10Zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0v4Z"
                                />
                                <path d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4Z" />
                            </g>
                        </svg>
                    </NuxtLink>
                </div> -->
            </div>
        </div>
    </li>
</template>

<style scoped></style>
