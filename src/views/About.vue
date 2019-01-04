<template>
  <div class="about">
    <h1>{{ message }}</h1>
    <h1 v-once>{{ message }}</h1>
    {{ rawHTML }}
    <span v-html="rawHTML"></span>
    <h1>{{ user.name }}</h1>

    {{ user.name.toUpperCase() }}

    {{ user.nme ? user.nme : 'NO tiene nombre' }}
  </div>
</template>

<script>
export default {
  name: 'About',

  data () {
    return {
      message: 'This is an about page',
      rawHTML: '<button>Don\'t click me!</button>',
      user: {
        name: 'Luis'
      },
      roles: [
        'admin',
        'editor',
        'user'
      ]
    }
  }
}
</script>
