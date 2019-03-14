<template>
  <div class="columns">
    <div class="column has-text-centered" v-if="animal.Name">
      <h1>Animal Details</h1>
      <img :src="animal.Image[0].url" alt="">
      <h3 class="is-size-4">
        <a :href="`/animals/${animal.id}`">
          {{ animal.Name }}
        </a>
      </h3>
      <p>
        Animal: {{ animal.Animal[0] }}
      </p>
      <p>
        Sex: {{ animal.Sex[0] }}
      </p>
      <p>
        Age: {{ animal.DOB | age }} years old
      </p>
      <p>
        Notes: <br>
        {{ animal.Notes }}
      </p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Animal',

  data () {
    return {
      animal: {}
    }
  },

  created () {
    const id = this.$route.params.id
    this.animal = this.$store.getters.getAnimal(id)
  }
}
</script>

<style lang="css" scoped>
</style>
