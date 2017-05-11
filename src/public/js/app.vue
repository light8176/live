<template>
  <div>
    <h1>Hello App!</h1>
    <ul>
        <li><router-link to="/foo">点我跳转到第一页</router-link></li>
        <li><router-link to="/bar">点我跳转到第二页</router-link></li>
      </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>