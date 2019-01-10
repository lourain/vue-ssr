<template>
  <div id="app">hello world123
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">

#app {
  position: relative;
  width: 100%;
  height: 2000px;
  color: aqua;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: fixed;
    top: 5px;
    background: #fff;
    z-index: -1;
  }
}
</style>
