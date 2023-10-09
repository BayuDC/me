<script lang="ts" setup>
const ready = useReady();
</script>

<template>
    <Html>
        <Head>
            <Title>BayuDC</Title>
            <Link rel="preconnect" href="https://fonts.googleapis.com" />
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
            <Link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap"
            />
        </Head>
    </Html>
    <Body class="text-light bg-dark min-w-[320px]">
        <ClientOnly>
            <Background @ready="ready.state1 = true" />
        </ClientOnly>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </Body>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
    transition: all 0.2s;
}
.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translateY(-40px);
}
</style>
