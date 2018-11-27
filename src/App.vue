<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './view/top-nav/index'
export default {
  name: 'app',
  data() {
    return {
      loading: false,
    }
  },
  components: {
    TopNav,
  },
}
</script>

<style>
</style>
