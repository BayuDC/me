declare module 'vue3-particles';
import VueParticles from 'vue3-particles';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueParticles);
});
