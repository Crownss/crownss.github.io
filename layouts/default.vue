<template>
  <v-app class="bg" dark>
    <v-container>
      <v-navigation-drawer
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
      </v-navigation-drawer>
      <v-app-bar v-if="$auth.loggedIn" :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>{{ $auth.user.email }}</v-toolbar-title>
        <v-spacer />
        <v-btn color="grey" nuxt to="/accounts/logout">Logout</v-btn>
      </v-app-bar>
      <v-app-bar v-else :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />
        <v-spacer />
      </v-app-bar>
      <v-main>
        <v-container>
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
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-filmstrip',
          title: 'Movie',
          to: '/movie',
        },
        {
          icon: 'mdi-chevron-right',
          title: 'On Going',
          to: '/on-going',
        },
        {
          icon: 'mdi-drama-masks',
          title: 'Genre',
          to: '/genre',
        },
        {
          icon: 'mdi-format-list-bulleted-square',
          title: 'Anime List',
          to: '/anime-list',
        },
        {
          icon: 'mdi-information-variant',
          title: 'About',
          to: '/about',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: true,
      title: 'DBAnime',
    }
  },
}
</script>
