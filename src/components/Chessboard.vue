<template>
  <div id="chessboard_container">
    <template>
      <ul v-for="(item, index) of this.chessList" :key="index">
        <li v-for="obj of item" :key="obj.index" :class="className(obj.value)" @click="paly_chess($event, obj.index)">
          <span></span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  data () {
    return {
      cal: 0,
      // 动态组件
      dymamicComponent: '',
      color: 'false',
      // 人机下棋切换
      curPlayer: 'player'
    }
  },
  computed: {
    ...mapGetters(['chessList']),
    className () {
      console.log('exe computerFn');
      return value => {
        console.log(value);
        if (!value) return ''
        return value === 'player' ? 'chessmanBlue' : 'chessmanRed'
      }
    }
  },
  methods: {
    // 辅助函数映射
    ...mapMutations(['set_mode', 'set_role', 'change_value']),
    // 电脑下棋的逻辑
    copmputerPlay (index) {
      // index 参数是从pay_chess函数传递的玩家自主决定的下棋的位置的index
      // 电脑怎么判断在什么地方下棋
      // 首先应该是判断自己现在能不能赢
      const leftList = this.chessList.flat().filter(ele => ele.value === '');
      // 随机挑选这个数组中的一个对象的index作为index传入
      if (!leftList.length) return
      const randomNum = Math.floor(Math.random() * leftList.length);
      const indexPara = leftList[randomNum].index;
      this.change_value({ index: indexPara, value: 'computer' });
      console.table(this.chessList.flat());
    },

    // 玩家执棋
    paly_chess (e, index) {
      // 判断当前这地方是否已经有棋子
      if (this.chessList.flat()[index - 1].value) return
      // 改变当前点击的格子的状态value，确定是玩家自己下棋的格子
      this.change_value({ index, value: 'player' });
      this.copmputerPlay(index);
    },

    // 关于判断是否有一方已经赢了的问题
    winConditions () {
      // 横向三个为一样的话，就赢了，游戏结束
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
