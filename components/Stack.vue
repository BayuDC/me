<script lang="ts" setup>
import stacks from '~/content/stacks.json';
</script>

<template>
    <div>
        <h2 class="text-3xl font-bold">Tech Stack</h2>
        <StackSection label="Languages">
            <StackItem v-for="stack in stacks.languanges" :src="stack" />
        </StackSection>
        <StackSection label="Frameworks and Libraries">
            <StackItem v-for="stack in stacks.frameworks" :src="stack" />
        </StackSection>
        <StackSection label="Tools">
            <StackItem v-for="stack in stacks.tools" :src="stack" />
        </StackSection>
    </div>
</template>
<style scoped></style>
