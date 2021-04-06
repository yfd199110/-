<template>
  <div id="app">
    <!-- 游戏外围的边框 -->
    <div class="container">
      <!-- 数据显示页 -->
      <div class="gameState" v-show="true">
        <span>player 1 🚩🚩🚩</span>
        <span>player 2 🚩</span>
      </div>
      <!-- 重置按钮,这个按钮会将游戏导向最开始的页面,并且清除数据 -->
      <button class="reset">重置</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
.reset {
  height: 30px;
  position: absolute;
  bottom: -30px;
  right: 10px;
  min-width: 40px;
  background-color: transparent;
  border-radius: 20px;
}
</style>
