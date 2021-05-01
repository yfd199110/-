<template>
  <div :class="classList">
    <span v-if="anyoneWin">{{whoPlay}}赢了</span>
    <span v-else>{{whoPlay}}执棋</span>
  </div>
</template>

<script>
export default {
  name: 'WinPopBox',
  props: {
    whoPlay: {
      type: String
    },
    anyoneWin: {
      type: Boolean
    }
  },
  // 组件数据
  data () {
    return {
      // classList: ['winpopbox_container']
    }
  },
  computed: {
    classList () {
      return this.whoPlay === 'computer' ? ['winpopbox_container', 'computer'] : ['winpopbox_container'];
    }
  }
}
</script>

<style scoped>
.winpopbox_container {
  width: 170px;
  height: 30px;
  position: absolute;
  top: -60px;
  text-align: center;
  line-height: 30px;
  background-color: greenyellow;
  border-radius: 10%;
  transition: all .5s ease;
}
.computer {
  /* right: 0px; */
  transform: translateX(100%);
  background-color: red;
}
</style>
