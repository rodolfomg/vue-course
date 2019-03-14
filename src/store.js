import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    animals: {}
  },

  mutations: {
    setAnimals (state, animals) {
      state.animals = animals
    }
  },

  getters: {
    getAnimals (state) {
      return state.animals
    },
    getAnimal: (state) => (id) => {
      return state.animals[id]
    }
  },

  actions: {
    storeAnimals ({ state, commit }, animals) {
      commit('setAnimals', animals.reduce((obj, animal) => {
        obj[animal.id] = animal.fields
        return obj
      }, {}))
    }
  }
})
