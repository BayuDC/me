<script lang="ts" setup>
const props = defineProps<{
    title: string;
    text: string;
    url: string;
}>();
</script>

<template>
    <li class="flex items-center gap-3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.0134 10.6641L3.94197 15.9766C3.52232 16.3437 2.84375 16.3437 2.42857 15.9766L1.41964 15.0937C1 14.7266 1 14.1328 1.41964 13.7695L5.72322 10.0039L1.41964 6.23828C1 5.87109 1 5.27734 1.41964 4.91406L2.42411 4.02344C2.84375 3.65625 3.52232 3.65625 3.9375 4.02344L10.0089 9.33594C10.433 9.70313 10.433 10.2969 10.0134 10.6641ZM18.5848 9.33594L12.5134 4.02344C12.0938 3.65625 11.4152 3.65625 11 4.02344L9.99107 4.90625C9.57143 5.27344 9.57143 5.86719 9.99107 6.23047L14.2946 9.99609L9.99107 13.7617C9.57143 14.1289 9.57143 14.7227 9.99107 15.0859L11 15.9687C11.4196 16.3359 12.0982 16.3359 12.5134 15.9687L18.5848 10.6562C19.0045 10.2969 19.0045 9.70313 18.5848 9.33594Z"
                fill="#0A9EFF"
            />
        </svg>

        <div>
            <span class="text-light-weak font-bold">{{ title }}</span
            >・<NuxtLink class="underline" external target="_blank" :to="url">{{ text }}</NuxtLink>
        </div>
    </li>
</template>

<style scoped></style>
