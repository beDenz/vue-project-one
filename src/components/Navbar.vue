<template>
  <nav class="blue darken-3">
    <div class="nav-wrapper blue darken-3">
      <router-link to="/" href="#" class="brand-logo">Task</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link tag="li" to="/" exact active-class="active">
          <a href="#">Home</a>
        </router-link>
        <router-link tag="li" to="/list" exact active-class="active">
          <a href="#">List</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>

<script>
export default {};
</script>