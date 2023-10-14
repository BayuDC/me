<script lang="ts" setup>
const props = defineProps<{
    title: string;
    description?: string;
    timestamp: string;
}>();
</script>

<template>
    <li class="pt-8 relative pl-14 group">
        <h3 class="text-xl font-bold">{{ title }}</h3>
        <div class="font-normal text-sm text-light mt-1" v-if="description">{{ description }}</div>
        <div class="font-bold text-lg text-light-weak mt-1">{{ timestamp }}</div>
        <div class="h-full w-1 bg-primary absolute left-0 top-0 group-last:hidden"></div>
        <div class="w-10 h-12 border-l-4 border-b-4 border-primary rounded-bl-[20px] left-0 top-0 absolute"></div>
    </li>
</template>

<style scoped></style>
