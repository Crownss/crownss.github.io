<template>
  <v-app class="bg" dark>
    <v-container fluid>
      <v-app-bar fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer />
        <v-toolbar-title v-text="title" />
        <v-spacer />
      </v-app-bar>
      <v-system-bar color="deep-purple darken-3"></v-system-bar>

      <v-navigation-drawer v-model="drawer" fixed bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <NuxtLink to="/" class="removeunderline">
              <v-list-item>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </NuxtLink>

            <NuxtLink to="/movie" class="removeunderline">
              <v-list-item>
                <v-list-item-title>Movie</v-list-item-title>
              </v-list-item>
            </NuxtLink>

            <NuxtLink to="/on-going" class="removeunderline">
              <v-list-item>
                <v-list-item-title>On-Going</v-list-item-title>
              </v-list-item>
            </NuxtLink>

            <NuxtLink to="/genre" class="removeunderline">
              <v-list-item>
                <v-list-item-title>Genre</v-list-item-title>
              </v-list-item>
            </NuxtLink>

            <NuxtLink to="/about" class="removeunderline">
              <v-list-item>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
            </NuxtLink>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    <v-container fluid>
      <v-container>
        <Nuxt />
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    title: 'DBAnime',
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style scoped>
.removeunderline {
  text-decoration: none;
}
</style>
