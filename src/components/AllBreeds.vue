<template>
  <div class="container">
    <!-- Loader -->
    <div v-if="loading" class="spin-center">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
    </div>

    <div v-else>
      <b-row>
        <b-col sm="6" md="6" class="mt-2">
          <!-- Select Breed -->
          <select class="form-control" @change="selectBreed" name="breed-select" id="breed-select">
            <option value="all" selected>All</option>
            <option
              :value="breedlist"
              v-for="breedlist in breedsArray"
              :key="breedlist"
            >
              {{breedlist}}
            </option>
          </select>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12"
          sm="3"
          class="mg"
          :key="index"
          v-for="( image,index ) in getImages"
        >
        
          <!-- The 100 images -->
          <div class="wrapper">
            <router-link
                :to="{
                    name: 'BreedDetails',
                    params: { index:index+1, dog:image[0]}  
                }"
              >
              <img :src="image[0].image" alt class="size image" />
              <div class="middle">
                <div class="text">View Details</div>
              </div>
            </router-link>
                <p class="breed_name"><b>{{image[0].breed}}</b></p>
          </div>
        </b-col>
      </b-row>

    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Grid",
  data() {
    return {
      loading: false,
    };
  },
  created() {
    //Show Loader
    this.loading = true;

    //Waste 3 seconds
    setTimeout(() => {
      this.loading = false;
    }, 3000);

   this.$store.dispatch('initialBreeds');
   this.$store.dispatch('loadAllBreeds');

  },
  computed: {
    ...mapGetters([
            'getImages',
            'breedsArray'
        ])
  },
  methods: {
    selectBreed (e) {
      this.$store.dispatch('selectBreed', { breedname: e.target.value })
    }
      
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin-top: 15px;
}
.size {
  height: 200px;
  width: 100%;
}
.wrapper {
  max-height: 200px;
  width: 100%;
}
p.breed_name {
  font-size: large;
}
.mg {
  margin-bottom: 3rem;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.image {
  opacity: 1;
  display: block;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.spin-center {
  top: 50%;
  left: 50%;
  position: absolute;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.wrapper:hover .image {
  opacity: 0.3;
}
.wrapper:hover .middle {
  opacity: 1;
}
.text {
  background-color: #ccc;
  color: rgb(54, 53, 53);
  font-size: 14px;
  padding: 8px 16px;
}
</style>