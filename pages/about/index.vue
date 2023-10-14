<script lang="ts" setup>
const ready = useReady();
</script>

<template>
    <div class="pt-36 py-12 flex flex-col">
        <Profile />
        <Description class="mt-12" />
        <div class="grid lg:grid-cols-2">
            <Journey class="mt-16 row-span-2" />
            <Stack class="mt-16" />
        </div>
    </div>
</template>

<style scoped></style>
