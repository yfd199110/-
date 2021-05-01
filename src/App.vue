<template>
  <div id="app">
    <!-- 游戏外围的边框 -->
    <div class="container">
      <!-- 数据显示页 -->
      <div class="gameState" v-show="true">
        <span class="iconfont">&#xe6c8;<span></span></span>
        <span class="iconfont" dir="rtl"><span></span>&#xe60d;</span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {}
  }
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.container {
  width: 400px;
  height: 430px;
  box-sizing: border-box;
  border: 30px solid #eec591;
  border-radius: 20px;
  box-shadow: -5px 5px 5px 2px gray,
               5px 0px 5px 2px gray;
  background: radial-gradient(rgba(14, 72, 179, 0.5), rgba(14, 72, 179, 0.8));
  position: relative;
}
.gameState {
  position: absolute;
  top: -30px;
  height: 30px;
  width: 100%;
  background-color: #eec591;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
}
.gameState span {
  flex: 1;
}
</style>
