<script lang="ts" setup>
const attrs = useAttrs();
</script>

<template>
    <li>
        <img class="h-8" :src="attrs.src" />
    </li>
</template>

<style scoped></style>
