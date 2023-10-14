<script lang="ts" setup>
import projects from '~/content/projects.json';
</script>

<template>
    <div class="pt-36 py-12">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectItem v-for="(project, i) in projects" v-bind="project" :key="i" />
        </ul>
    </div>
</template>

<style scoped></style>
