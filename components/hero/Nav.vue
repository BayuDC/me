<script lang="ts" setup></script>

<template>
    <div class="flex flex-col md:flex-row items-center justify-center lg:gap-8 gap-4 mt-12">
        <div v-motion-slide-left>
            <Button
                v-once
                class="hover:bg-secondary/100 bg-secondary/0 transition duration-200 border-2 hover:border-secondary"
                to="/projects"
                >My Projects</Button
            >
        </div>
        <div v-motion-slide-right>
            <Button
                v-once
                class="hover:bg-primary/100 bg-primary/0 transition duration-200 border-2 hover:border-primary"
                to="/about"
                >About Me</Button
            >
        </div>
    </div>
</template>

<style scoped></style>
