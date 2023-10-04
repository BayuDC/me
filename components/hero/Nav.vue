<script lang="ts" setup></script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
        <Button v-once v-motion-slide-left class="bg-secondary">My Projects</Button>
        <Button v-once v-motion-slide-right class="bg-primary">About Me</Button>
    </div>
</template>

<style scoped></style>
