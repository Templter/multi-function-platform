<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal" v-model:selectedKeys="selectedKeys" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    
    <a-layout-footer style="text-align: center">
      Product By Vicher
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'layoutAnt',
  setup() {
    return {
      selectedKeys: ref<string[]>(['2']),
    };
  },
});
</script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
