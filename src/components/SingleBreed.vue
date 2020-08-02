<template>
<!-- More info about the breed -->
  <div class="container text-center"> 
      <p class="breedname"><b>Breed name: </b> {{dog.breed}}</p>
      <p><a :href="dog.image" target="blank">Download Image</a></p>
      <img :src="dog.image" class="size" alt=""> 
  </div> 
</template>

<script>
export default {
  name: "singlebreed",
  props: ["dog"]
}
</script>

<style>
p.breedname{
  font-size: 28px;
  text-transform: capitalize;
}
.size {
  height: 300px;
  width: auto;
}
</style>