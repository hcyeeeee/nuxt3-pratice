// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
    ],
  },
});
