<template>
  <v-app dark>
    <h1 id="login">Login nya disini</h1>
    <UserAuthForm button-text="Login" :submit-form="LoginUser" />
  </v-app>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm'
export default {
  components: {
    UserAuthForm,
  },
  head: {
    title: 'Login',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DBAnime Login',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content: 'DBAnime Login',
      },
    ],
  },
  methods: {
    LoginUser() {
      this.$auth.loginWith('local', {
        data: {
          email: 'puddin@gmail.com',
          password: 'password',
        },
      })
    },
  },
}
</script>

<style>
#login {
  color: magenta;
}
</style>
