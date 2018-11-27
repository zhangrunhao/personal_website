<template>
  <div>
    <h1>首页</h1>
    <banner></banner>
    <br-main></br-main>
    <br-footer></br-footer>
  </div>
</template>

<script>
import Banner from '../banner/index'
import BrFooter from '../footer/index'
import BrMain from '../main/index'

export default {
  components: {
    Banner,
    BrFooter,
    BrMain,
  }  
}
</script>
