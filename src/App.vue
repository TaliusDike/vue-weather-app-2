<template>
  <div id="app">
    <NavBar/>

    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './navigation/NavBar.vue'

export default {
  name: "App",
  components: {
    NavBar

  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", san-serif;
}

/* .main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75) );
 } */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  /* margin-top: 60px; */
  /* background-image: url("./assets/cold-bg.jpg"); */
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  
}

#app .warm {
  background-image: url("./assets/warm-bg.jpg");
}

#app .cold {
  background-image: url("./assets/cold-bg.jpg");
}
</style>
