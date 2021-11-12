<template>
  <v-row>
    <h3>
      I'm use
      <a class="nuxt" href="https://google.com"
        >Nuxt Js <v-icon small color="cyan darken-2">mdi-nuxt</v-icon></a
      >
      as frontend, and use
      <a class="django" href="https://golang.org"
        >Django<v-icon small color="yellowx darken-2"
          >mdi-language-python</v-icon
        ></a
      >
      as backend, and dont forget
      <a class="postgres" href="http://google.com"
        >Postgres<v-icon small color="blue darken-2">mdi-elephant</v-icon></a
      >
      as database
    </h3>
  </v-row>
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
