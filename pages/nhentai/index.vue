<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-text>
      <v-spacer />
      <div>Nhentai Downloader</div>
      <v-form v-model="valid">
        <v-spacer />
        <v-col cols="15" md="15">
          <v-text-field
            v-model="nhentaiID"
            :rules="Rules"
            :counter="7"
            label="Code nuclear"
            pattern="[0-9]+"
            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
            required
            class="text-h4 text--primary mx-auto"
          ></v-text-field>
        </v-col>
      </v-form>
      <div class="text--primary">Download it with zip format or cbz format</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="cyan accent-4"
        rel="noreferrer"
        target="_blank"
        href="http://localhost:8000/download/+{nhentaiID}+/zip"
      >
        Zip
      </v-btn>
      <v-spacer />
      <v-btn
        text
        color="cyan accent-4"
        rel="noreferrer"
        target="_blank"
        :href="{ linkCbz }"
      >
        Cbz
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      nhentaiID: '',
      linkZip:
        `https://nhder.herokuapp.com/download/nhentai/` +
        this.nhentaiID +
        `/zip`,
      linkCbz:
        `https://nhder.herokuapp.com/download/nhentai/` +
        this.nhentaiID +
        `/cbz`,
      Rules: [
        (v) => !!v || 'Code nuclear is required',
        (v) => v.length <= 7 || 'Code nuclear must be less than 7 characters',
      ],

      // email: '',
      // emailRules: [
      //   (v) => !!v || 'E-mail is required',
      //   (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      // ],
    }
  },
  head: {
    title: 'Nhentai',
  },
  created() {
    this.withZip()
    this.withCbz()
  },
  methods: {
    async withZip() {
      await this.$axios.get(this.linkZip).then((response) => {
        window.open(response)
        setTimeout(3000)
        window.close()
      })
    },
    async withCbz() {
      await this.$axios.get(this.linkCbz).then((response) => {
        window.open(response)
        setTimeout(3000)
        window.close()
      })
    },
  },
}
</script>
