<template>
  <div id="app">
    <div class="main">
      <div v-if="$route.path !== '/'" class="breadcrumbs">
        <router-link to="/">&larr; к списку</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import '@/assets/styles.scss';

export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.breadcrumbs .router-link-active {
  text-decoration: none;
  color: rebeccapurple;
}
</style>
