<template>
  <div class="checkRole">
    <p>Would you like to be X or O?</p>
    <section class="role">
      <span @click="goGame('X')">X</span>
      <span @click="goGame('O')">O</span>
    </section>
    <span class="back" @click="goback"><i class="iconfont">&#xe62e;</i>Back</span>
  </div>
</template>

<script>
export default {
  name: "Role",
  data () {
      return {
      }
  },
  methods: {
      goGame (val) {
        this.$store.commit('set_role', val);
        this.$router.push('/Chessboard');
      },
      goback () {
        this.$router.push('/Mode');
      }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';
  src: url('../assets/fonts/iconfont.eot');
  src: url('../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../assets/fonts/iconfont.woff') format('woff'),
      url('../assets/fonts/iconfont.woff2') format('woff2'),
      url('../assets/fonts/iconfont.ttf') format('truetype'),
      url('../assets/fonts/iconfont.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.checkRole {
    text-align: center;
    color: white;
    padding: 10px;
    height: 100%;
}
.checkRole p {
    font-size: 40px;
}
.checkRole section {
    display: flex;
    justify-content: space-around;
    font-size: 40px;
}
span:hover {
    cursor: pointer;
    border-radius: 20px;
}
.back {
    position: relative;
    bottom: -60px;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
