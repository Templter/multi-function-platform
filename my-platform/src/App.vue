<template>
  <div id="main_container">
    <layout></layout>
    <!-- <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition> -->
  </div>
</template>

<script lang="ts">
import layout from './views/layout/layout.vue'
export default {
  components: {
    layout
  },
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