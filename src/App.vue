<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.css";
</style>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar }
};
</script>