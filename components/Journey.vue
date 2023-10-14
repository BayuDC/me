<script lang="ts" setup>
import journeys from '~/content/journeys.json';
</script>

<template>
    <div>
        <h2 class="text-3xl font-bold">Journey</h2>
        <ul class="mt-8 flex flex-col">
            <JourneyItem v-for="(journey, i) in journeys" v-once v-bind="journey" :key="i" />
        </ul>
    </div>
</template>

<style scoped></style>
