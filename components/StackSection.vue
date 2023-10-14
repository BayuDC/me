<script lang="ts" setup>
const props = defineProps<{
    label: string;
}>();
</script>

<template>
    <div class="mt-6">
        <h3 class="font-bold text-lg text-light-weak">{{ label }}</h3>
        <ul class="mt-2 flex gap-2 flex-wrap">
            <slot />
        </ul>
    </div>
</template>

<style scoped></style>
