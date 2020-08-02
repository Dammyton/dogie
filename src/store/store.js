import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from './../router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    breedlist: [],
    breedname: [],
    breedimages: ""
  },
  getters: {
    // Get Homepage Breed Images
    getImages: (state) => {
      return state.breedimages
    },
    // Get Breedlist
    breedsArray: (state) => {
      let subBreeds = []
      for (const name of state.breedname) {
        if (state.breedlist[name].length > 0) {
          for (let i = 0; i < state.breedlist[name].length; i++) {
            subBreeds.push('' + name + ' ' + state.breedlist[name][i])
          }
        } else {
          subBreeds.push(name)
        }
      }
      subBreeds.splice(127, 1)
      // console.log(subBreeds.length, "SubBreed")
      return subBreeds
    }
  },
  actions: {
    // Load All Breeds Images on the Homepage
    initialBreeds({ commit }) {
      axios
        .get('https://dog.ceo/api/breeds/image/random/100')
        .then(response => response.data.message)
        .then(images => {
          var dog = []
          var breeds = []
          // get breedname from the image link
          images.forEach(function (breedname) {
            breedname = breedname.substring(0, breedname.lastIndexOf("/"));
            breedname = breedname.split("https://images.dog.ceo/breeds/");
            breedname = breedname.slice(1);

            breeds.push(breedname[0])
          })

          for (var i = 0; i < images.length; i++) {
            dog.push(
              [
                {
                  image: images[i],
                  breed: breeds[i]
                }
              ]
            )
          }

          // console.log(images, "Homepage breeds images", breeds, dog)

          commit('ADD_IMAGE', dog)
        })
    },
    // Load All Breed List
    loadAllBreeds({ commit }) {
      axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response => response.data.message)
        .then(breeds => {
          commit('SET_BREEDS', breeds)
        })
    },
    // Sort by breed on the Homepage
    selectBreed({ commit, state }, breedname) {
      state.breedimages = ""
      if (breedname.breedname !== 'all') {
        let str = breedname.breedname.toString()
        str = str.replace(/\s/g, '/')
        console.log(str, "string")
        axios
          .get('https://dog.ceo/api/breed/' + str + '/images/random/100')
          .then(response => response.data.message)
          .then(images => {
            var dog = []
            var breeds = []
            // get breedname from the image link
            images.forEach(function (breedname) {
              breedname = breedname.substring(0, breedname.lastIndexOf("/"));
              breedname = breedname.split("https://images.dog.ceo/breeds/");
              breedname = breedname.slice(1);

              breeds.push(breedname[0])
            })

            for (var i = 0; i < images.length; i++) {
              dog.push(
                [
                  {
                    image: images[i],
                    breed: breeds[i]
                  }
                ]
              )
            }
            commit('ADD_IMAGE', dog)
          })
      } else {
        axios
          .get('https://dog.ceo/api/breeds/image/random/100')
          .then(response => response.data.message)
          .then(images => {
            var dog = []
            var breeds = []
            // get breedname from the image link
            images.forEach(function (breedname) {
              breedname = breedname.substring(0, breedname.lastIndexOf("/"));
              breedname = breedname.split("https://images.dog.ceo/breeds/");
              breedname = breedname.slice(1);

              breeds.push(breedname[0])
            })

            for (var i = 0; i < images.length; i++) {
              dog.push(
                [
                  {
                    image: images[i],
                    breed: breeds[i]
                  }
                ]
              )
            }
            commit('ADD_IMAGE', dog)
          })
      }
    },
  },
  mutations: {
    ADD_IMAGE(state, dog) {
      state.breedimages = dog
    },
    SET_BREEDS(state, breeds) {
      state.breedlist = breeds
      state.breedname = Object.getOwnPropertyNames(breeds)
    },
  }
})
