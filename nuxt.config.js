export default {
  target: 'static',

  head: {
    title: 'Star Wars | Proof of concept',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet preconnect',
        crossorigin: true,
        href: 'https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap',
      },
    ],
  },

  css: [{ src: '~/assets/stylus/main.styl', lang: 'styl' }],

  plugins: [],

  components: {
    dirs: [
      '~/components/core',
      '~/components/ui',
      '~/components/page',
    ],
  },

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {},

  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/characters/index.vue',
      },
      {
        name: 'user',
        path: '/user',
        component: 'pages/characters/_id.vue',
      },
    ],
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
};
