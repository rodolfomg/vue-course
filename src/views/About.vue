<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ fullname }}</h1>
      <sys-form :inputs="inputs"/>
    </div>
  </section>
</template>

<script>
import SysForm from '@/components/SysForm'

export default {
  name: 'About',

  components: {
    'sys-form': SysForm
  },

  data () {
    return {
      inputs: [
        {
          id: 'name',
          label: 'Nombre',
          value: '',
          hint: 'Escribe tu nombre',
          type: 'text'
        },
        {
          id: 'lastname',
          label: 'Apellido',
          value: '',
          hint: 'Escribe tu apellido',
          type: 'text'
        }
      ],
      user: {
        name: '',
        lastname: '',
        obj: {
          hello: 'hello'
        }
      }
    }
  },

  computed: {
    fullname () {
      return this.inputs[0].value + ' ' + this.inputs[1].value
    }
  },

  watch: {
    fullname (newValue, oldValue) {
      this.user.name = this.inputs[0].value
      this.user.lastname = this.inputs[1].value
    },
    user: {
      handler (newUser, oldUser) {
        console.log(JSON.stringify(newUser))
      },
      deep: true
    },
    'user.name' (newName, oldName) {
      console.log('Cambio el nombre')
    }
  }
}
</script>
