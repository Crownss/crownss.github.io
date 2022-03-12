<template>
  <v-app dark>
    <br />
    <v-row>
      <v-col cols="12" md="10" no-gutters
        ><h2>Cuaca hari ini</h2>
        <h4>
          Lokasi: {{ getLocation.country }}, {{ getLocation.region }},
          {{ getLocation.name }}({{ getLocation.lat }},{{ getLocation.lon }})
        </h4>
        <h4>Waktu Lokasi: {{ getLocation.localtime }}</h4>
        <br />
        <h4>Suhu(dalam calcius): {{ getCurrent.temp_c }}</h4>
        <h4>
          Kondisi: {{ getCurrentCondition.text }}
          <!-- {{ getCurrentCondition.icon }} -->
        </h4>
        <h4>
          Terakhir update: {{ $moment(getCurrent.last_updated).fromNow() }}
        </h4>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      getLocation: [],
      getCurrent: [],
      getCurrentCondition: [],
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    async getProduct() {
      await this.$axios
        .get(process.env.WEATHER_API)
        .then((response) => {
          this.getLocation = response.data.location
          this.getCurrent = response.data.current
          this.getCurrentCondition = response.data.current.condition
        })
        .catch((e) => {
          if (e.response.status === 404) {
            return this.$nuxt.error({ statusCode: 404, message: e.message })
          }
        })
    },
  },
}
</script>
