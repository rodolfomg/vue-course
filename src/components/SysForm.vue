<template>
  <div class="columns is-multiline">
    <div
      class="column is-4"
      v-for="input in inputs"
      :key="input.id"
      >

      <div class="field">
        <label class="label">{{ input.label }}</label>
        <div class="control">
          <input
            v-model="input.value"
            :type="input.type"
            :placeholder="input.hint"
            class="input"
            >
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

  name: 'SysForm',

  props: {
    inputs: { type: Array, required: true }
  }
}
</script>

<style lang="css" scoped>
</style>
