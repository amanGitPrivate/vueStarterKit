<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
     <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    <router-view/>
  </div>
</template>

<script>
import Skills from "./components/Skills/Skills.vue";

export default {
  name: "app",
  components: {
    Skills
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #eeeeee;
}
</style>
