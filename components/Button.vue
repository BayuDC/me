<script lang="ts" setup>
const props = defineProps<{
    to?: string;
}>();

const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
    <component :is="to ? NuxtLink : 'button'" v-bind="props" class="px-5 py-2.5 rounded-xl">
        <slot />
    </component>
</template>

<style scoped></style>
