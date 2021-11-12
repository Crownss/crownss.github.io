<template>
  <v-app dark>
    <v-text-field
      v-model="search"
      outlined
      label="search"
      rounded
      danse
    ></v-text-field>
    <br />
    <v-row>
      <v-col
        v-for="(value, index) in (getAllDB, searchResult)"
        :key="index"
        cols="10"
        no-gutters
        md="4"
      >
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text text--primary align-end"
            height="200px"
            :src="value.image_url"
          >
            <v-card-title>{{ value.title }}</v-card-title>
          </v-img>

          <!-- <v-card-subtitle class="pb-0"> </v-card-subtitle> -->

          <v-card-text class="text--primary">
            <div>{{ value.synopsis }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-chip
              close
              close-icon="mdi-open-in-new"
              color="blue"
              link
              target="_blank"
              outlined
              nuxt
              :href="value.url"
              >Goto Link</v-chip
            >
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import sanitizeHtml from 'sanitize-html'
export default {
  data() {
    return {
      getAllDB: [],
      search: '',
      slug: this.$route.params.slug,
    }
  },

  computed: {
    searchResult() {
      return this.getAllDB.filter((db) => {
        return db.title.match(this.search)
      })
    },
  },

  watch: {
    Sanitize() {
      return this.sanitize()
    },
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      await this.$axios
        .get(`https://api.jikan.moe/v3/search/anime?q=movie`)
        .then((response) => {
          this.getAllDB = response.data.results
        })
    },
    formatDate(date) {
      const option = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', option)
    },
    sanitize() {
      return sanitizeHtml(this.searchResult)
    },
  },
}
</script>
