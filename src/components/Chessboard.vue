<template>
  <div id="chessboard_container">
    <template>
      <ul v-for="(item, index) of this.$store.state.chessman_list" :key="index">
        <li v-for="obj of item" :key="obj.index"  @click="paly_chess($event, obj.index)">
          <span :data-num="obj.index"></span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cal: 0,
      // 动态组件
      dymamicComponent: '',
      color: 'false'
    }
  },
  methods: {
    paly_chess (e, index) {
      const curValue = e.currentTarget.childNodes[0].dataset.num;
      if (curValue === index.toString()) {
        e.currentTarget.classList.add('chessmanBlue');
      };
    }
  }
}
</script>

<style scoped>
/* 将棋盘分成九个相等的部分 */
* {
  padding: 0;
  margin: 0;
}
#chessboard_container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
ul {
  flex: 1;
  list-style: none;
  display: flex;
}
li {
  flex: 1;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
li span {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
li.chessmanBlue span {
  background-color: chartreuse;
}
li.chessmanRed span {
  background-color: rgb(207, 75, 75);
}
</style>
