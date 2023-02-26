<template>
  <div id="main_container">
    <a-layout class="layout">
      <a-layout-header>
        <div class="logo" />
        <a-menu theme="dark" mode="horizontal" v-model:selectedKeys="selectedKeys" @click="routeTo" :style="{ lineHeight: '64px' }">
          <a-menu-item key="login">登录</a-menu-item>
          <a-menu-item key="WorkBench">首页</a-menu-item>
        </a-menu>
      </a-layout-header>
      <router-view></router-view>
      <a-layout-footer style="text-align: center">
        Product By Vicher
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'layoutAnt',
  setup() {
    const router = useRouter()

    function routeTo (selectedKeys: any) {
      router.push({
        path: '/'+ selectedKeys.key
      })
      console.log(selectedKeys)
    }

    return {
      selectedKeys: ref<string[]>(['login']),
      routeTo
    };
  },
})
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

#main_container {
  width: 100%;
  height: 100%;
}
</style>

