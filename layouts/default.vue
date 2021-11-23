<template>
  <v-app class="bg" dark>
    <v-container fluid>
      <!-- <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->
      <!-- <v-app-bar :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-spacer />

        <v-toolbar-title v-text="title" />
        <v-spacer />
      </v-app-bar> -->
      <v-app-bar fixed app>
        <v-spacer />
        <v-toolbar-title v-text="title" />
        <v-spacer />
      </v-app-bar>

      <v-speed-dial
        v-model="fab"
        fixed
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template #activator>
          <v-btn v-model="fab" color="white" dark fab>
            <v-icon v-if="fab" color="black"> mdi-close </v-icon>
            <v-icon v-else color="black"> mdi-menu-open </v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small to="/" color="black">
          <v-icon color="white">mdi-home</v-icon>
        </v-btn>
        <v-btn fab dark small to="/movie" color="white">
          <v-icon color="black">mdi-filmstrip</v-icon>
        </v-btn>
        <v-btn fab dark small to="/on-going" color="black">
          <v-icon color="white">mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn fab dark small to="/genre" color="white">
          <v-icon color="black">mdi-drama-masks</v-icon>
        </v-btn>
        <v-btn fab dark small to="/anime-list" color="black">
          <v-icon color="white">mdi-format-list-bulleted-square</v-icon>
        </v-btn>
        <v-btn fab dark small to="/about" color="white">
          <v-icon color="black">mdi-information-variant</v-icon>
        </v-btn>
      </v-speed-dial>
      <v-main>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-main>
      <v-footer :absolute="!fixed" app>
        <span
          >Copyright&copy; {{ new Date().getFullYear() }}, DBAnime&reg; All
          Rights Reserved</span
        >
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
// export default {
//   data() {
//     return {
//       clipped: true,
//       drawer: false,
//       fixed: true,
//       items: [
//         {
//           icon: 'mdi-home',
//           title: 'Home',
//           to: '/',
//         },
//         {
//           icon: 'mdi-filmstrip',
//           title: 'Movie',
//           to: '/movie',
//         },
//         {
//           icon: 'mdi-chevron-right',
//           title: 'On Going',
//           to: '/on-going',
//         },
//         {
//           icon: 'mdi-drama-masks',
//           title: 'Genre',
//           to: '/genre',
//         },
//         {
//           icon: 'mdi-format-list-bulleted-square',
//           title: 'Anime List',
//           to: '/anime-list',
//         },
//         {
//           icon: 'mdi-information-variant',
//           title: 'About',
//           to: '/about',
//         },
//       ],
//       miniVariant: false,
//       right: true,
//       rightDrawer: true,
//       title: 'DBAnime',
//     }
//   },
// }
//
export default {
  data: () => ({
    direction: 'left',
    fab: false,
    fling: true,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: 'scale-transition',
    title: 'DBAnime',
    fixed: true,
  }),
  watch: {
    top(val) {
      this.bottom = !val
    },
    right(val) {
      this.left = !val
    },
    bottom(val) {
      this.top = !val
    },
    left(val) {
      this.right = !val
    },
  },
}
</script>
