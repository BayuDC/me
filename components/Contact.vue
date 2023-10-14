<script lang="ts" setup>
import contacts from '~/content/contacts.json';
</script>

<template>
    <div>
        <h2 class="text-3xl font-bold">Contact & Socials</h2>
        <div class="mt-6">
            <ol class="flex flex-col gap-1">
                <ContactItem v-for="contact in contacts" v-bind="contact" />
            </ol>
        </div>
    </div>
</template>

<style scoped></style>
