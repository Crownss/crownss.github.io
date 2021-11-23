<template>
  <v-container fluid>
    <v-row>
      <v-spacer />
      <h3>
        I'm use
        <a class="nuxt" href="https://nuxtjs.org"
          >Nuxt Js <v-icon small color="cyan darken-2">mdi-nuxt</v-icon></a
        >
        as frontend, and use
        <a class="django" href="https://djangoproject.com"
          >Django<v-icon small color="yellow darken-2"
            >mdi-language-python</v-icon
          ></a
        >
        as backend, and dont forget
        <a class="postgres" href="https://postgresql.org"
          >Postgres<v-icon small color="blue darken-2">mdi-elephant</v-icon></a
        >
        as database
      </h3>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />

      <h4>
        this website still beta, because I'm the only one who built this website
        alone, maybe i need a team
      </h4>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />

      <h2>
        Any question? ask me
        <a href="https://wa.me/6281532631588" target="_blank" rel="noreferrer"
          >here</a
        >
      </h2>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'About',
  },
}
</script>
<style scoped>
.nuxt:link,
.nuxt:active,
.nuxt:hover,
.nuxt:visited {
  text-decoration: none;
  color: cyan;
}
.django:link,
.django:hover,
.django:active,
.django:visited {
  text-decoration: none;
  background-color: darkgreen;
  color: white;
}
.postgres:link,
.postgres:hover,
.postgres:active,
.postgres:visited {
  text-decoration: none;
  color: rgb(15, 118, 202);
}
</style>
