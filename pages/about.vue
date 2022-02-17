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

      <h2>
        Bebas streaming tanpa iklan iklan club 😎
      </h2>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />

      <h4>
        website ini bertujuan utk memudahkan pengguna untuk streaming/download film dan animasi/anime
      </h4>
      <v-spacer />
    </v-row>
        <v-row>
      <v-spacer />

      <h4>
        Kelebihan: <br />
        1. GRATIS <br />
        2. No iklan <br />
        3. Ui yang mudah <br />
        4. Memudahkan pengguna <br />
        5. Lengkap<br />
      </h4>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />

      <h2>
        Berikut tampilan gambar Home: 
        <img src="/img/gambar.jpeg" />
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
