<script lang="ts" setup>
const props = defineProps<{
    to?: string;
}>();
const attrs = useAttrs();

const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
    <component
        :is="to ? NuxtLink : 'button'"
        v-bind="{ ...props, ...attrs }"
        class="px-5 py-2.5 rounded-xl text-sm md:text-base font-bold"
    >
        <slot />
    </component>
</template>

<style scoped></style>
