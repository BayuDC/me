<script lang="ts" setup>
const route = useRoute();
</script>

<template>
    <div class="fixed w-full py-4 md:py-6 bg-dark">
        <div class="flex items-center justify-center gap-2">
            <Button
                to="/projects"
                class="bg-secondary/0 hover:bg-secondary/100 transition duration-300"
                active-class="!bg-secondary"
                >My Projects</Button
            >
            <Button
                to="/about"
                class="bg-primary/0 hover:bg-primary/100 transition duration-300"
                active-class="!bg-primary"
                >About Me</Button
            >
        </div>
    </div>
</template>

<style scoped></style>
