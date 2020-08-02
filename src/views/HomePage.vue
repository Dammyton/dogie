<template>
<!-- Homepage -->
  <div>
    <Navbar />
    <Breadcrumb />
    <AllBreeds />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb"
import AllBreeds from "../components/AllBreeds";

export default {
  name: "HomePage",
  components: {
    Navbar,
    Breadcrumb,
    AllBreeds
  },
  // beforeCreate () {
  //   this.$store.dispatch('loadAllBreeds')
  // }
};
</script>

<style>

</style>
