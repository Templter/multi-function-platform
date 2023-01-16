<template>
  <div id="app">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      greeting: 'Hello World!'
    }
  },
  computed: {
    isLogin() {
      return true
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
