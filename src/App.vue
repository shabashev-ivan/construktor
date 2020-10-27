<template>
  <div id="app">
    <navigationPanel/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import navigationPanel from "@/components/navigationPanel";
  export default {
    components: {
      navigationPanel
    },
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
  }

</style>
