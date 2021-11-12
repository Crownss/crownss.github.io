// import { configs } from 'eslint-plugin-prettier'
import colors from 'vuetify/es5/util/colors'

const title = 'DBAnime'

const desc =
  'DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  telemetry: true,
  mode: 'spa',
  target: 'static',
  head: {
    titleTemplate: '%s | ' + title,
    title: 'Home',
    htmlAttrs: {
      lang: 'id',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        property: 'og:locale',
        content: 'id',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: desc,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: title,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        property: 'apple-mobile-web-app-title',
        content: title,
      },
      {
        hid: 'mobile-web-app-capable',
        name: 'mobile-web-app-capable',
        property: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'language',
        name: 'language',
        property: 'language',
        content: 'id',
      },
      {
        hid: 'robots',
        name: 'robots',
        property: 'robots',
        content: 'index, follow',
      },
      {
        hid: 'title',
        name: 'title',
        property: 'title',
        content: title,
      },
      {
        hid: 'description',
        name: 'description',
        property: 'description',
        content: desc,
      },
      {
        hid: 'keyword',
        name: 'keyword',
        property: 'keyword',
        content: title,
      },
    ],
    link: [
      {
        hid: 'shortcut-icon',
        rel: 'shortcut-icon',
        type: 'image/x-icon',
        href: '/img/icon/alice.png',
      },
      {
        hid: 'icon',
        rel: 'icon',
        type: 'image/png',
        href: '/img/icon/alice.png',
      },
      {
        hid: 'image/icon',
        rel: 'icon',
        type: 'image/icon',
        href: '/img/icon/alice.png',
      },
      {
        hid: 'image/png',
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img/icon/alice.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/devalue',
    '@dansmaculotte/nuxt-security',
    '@nuxt/devalue',
    [
      '@nuxtjs/google-analytics',
      {
        ua: 'G-JDRSB3CDLH',
      },
    ],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-5HX7DR9' }],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'http://localhost:8000/account/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: {
            url: 'http://localhost:8000account/logout',
            method: 'delete',
          },
          user: {
            url: '/sessions/users',
            method: 'get',
            propertyName: 'data.attributes',
          },
        },
        tokenRequired: true,
        tokenType: '',
      },
    },
  },
}
