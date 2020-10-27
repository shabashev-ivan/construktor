<template>
  <div id="nav">
    <router-link class="nav-link" to="/">Construktor</router-link>
  </div>
</template>

<script>
  export default {
    name: "navigationPanel",
  }
</script>

<style scoped>
  #nav {
    z-index: 50;
    height: 50px;
    padding: 10px 20px;
    display: flex;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0 rgba(67, 75, 114, 0.23);
    align-items: center;
  }
  .nav-link {
    text-decoration: none;
    color: #2c3e50;
  }
</style>
