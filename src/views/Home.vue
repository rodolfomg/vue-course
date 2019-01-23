<template>
  <div class="home">
    <div class="columns">
      <div
        class="column is-4 has-text-centered"
        v-for="animal in animals"
        :key="animal.id"
        >
        <img :src="animal.fields.Image[0].url" alt="">
        <h3 class="is-size-4">{{ animal.fields.Name }}</h3>
        <p>
          Animal: {{ animal.fields.Animal[0] }}
        </p>
        <p>
          Sex: {{ animal.fields.Sex[0] }}
        </p>
        <p>
          Age: {{ animal.fields.DOB | age }} years old
        </p>
        <p>
          Notes: <br>
          {{ animal.fields.Notes }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import airtableService from '@/services/airtable-service'

export default {
  name: 'home',

  data () {
    return {
      animals: []
    }
  },

  created () {
    airtableService.get('').then(res => {
      this.animals = res.data.records
    })
  },

  filters: {
    age (dob) {
      let now = new Date
      let months = parseInt(dob.split('-')[0] * 12) + parseInt(dob.split('-')[1])

      return ((now.getFullYear() * 12 + now.getMonth() - months) / 12).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    height: 100px;
    max-width: 100%;
    width: auto;
  }
</style>
