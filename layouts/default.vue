<script lang="ts" setup>
const ready = useReady();

onMounted(() => {
    ready.value.state2 = true;
});
</script>

<template>
    <div class="relative z-20">
        <Navbar class="top-0 border-b-2 z-30" />
        <div class="container mx-auto max-w-[1280px] px-6 md:px-12 min-h-screen">
            <slot />
        </div>
    </div>
</template>

<style scoped></style>
