<template>
  <v-app dark>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div v-if="error.statusCode === 404">
      <center>
        <h1 style="color: gray">{{ pageNotFound }}</h1>
        <h1 class="required">You're lost dude</h1>
        <hr />
        <v-chip
          close
          close-icon="mdi-home"
          color="blue"
          link
          outlined
          nuxt
          to="/"
          >Back to home</v-chip
        >
      </center>
    </div>
    <div v-else-if="error.statusCode === 403">
      <center>
        <h1 style="color: gray">{{ authenticateRequired }}</h1>
        <h1 class="required">There's no way for you to access this page</h1>
        <hr />
        <v-chip
          close
          close-icon="mdi-home"
          color="blue"
          link
          outlined
          nuxt
          to="/"
          >Back to home</v-chip
        >
      </center>
    </div>
    <div v-else-if="error.statusCode === 400">
      <center>
        <h1 style="color: gray">{{ badRequest }}</h1>
        <h1 class="required">Something wrong with your request</h1>
        <hr />
        <v-chip
          close
          close-icon="mdi-home"
          color="blue"
          link
          outlined
          nuxt
          to="/"
          >Back to home</v-chip
        >
      </center>
    </div>
    <div v-else-if="error.statusCode === 500">
      <center>
        <h1 style="color: gray">{{ internalError }}</h1>
        <h1 class="required">Oups !, looks like our internal server error</h1>
        <hr />
        <v-chip
          close
          close-icon="mdi-home"
          color="blue"
          link
          outlined
          nuxt
          to="/"
          >Back to home</v-chip
        >
      </center>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      authenticateRequired: '403 Authenticate Required',
      internalError: '500 Internal Server Error',
      badRequest: '400 Bad Request',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title = [
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError,
      this.error.statusCode === 403
        ? this.authenticateRequired
        : this.otherError,
      this.error.statusCode === 400 ? this.badRequest : this.otherError,
      this.error.statusCode === 500 ? this.internalError : this.otherError,
    ]
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
