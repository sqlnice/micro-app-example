<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link to="/app1">APP1</router-link>|
      <router-link to="/app2">APP2</router-link>
    </nav>
    <router-view v-if="showMainApp" />
    <div v-else id="subapp-viewport"></div>
  </div>
</template>
<script>
export default {
  computed: {
    showMainApp() {
      return ['/', '/about'].includes(this.$route.path);
    },
  },
};
</script>
<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
