<template>
<!-- About Breed Page -->
  <div>
    <Navbar/>
    <AboutBC/>
    <SingleBreed :dog="dog" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import AboutBC from "../components/AboutBC";
import SingleBreed from "../components/SingleBreed";

export default {
  name: "breed_details",
  props: ["dog"],
  components: {
    Navbar,
    AboutBC,
    SingleBreed
  }
};
</script>

<style>

</style>
