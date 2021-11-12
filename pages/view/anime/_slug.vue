<template>
  <v-app white
    ><h1>{{ db.title }}</h1>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      db: [],
      slug: this.$route.params.slug,
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      await this.$axios
        .get(
          'http://localhost:8000/view/api/dbanime-list/' +
            this.slug +
            '/?format=json'
        )
        .then((data) => {
          this.db = data.data
        })
        .catch((error) => console.log(error))
    },
    formatDate(date) {
      const option = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', option)
    },
  },
}
</script>
