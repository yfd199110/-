<template>
  <div id="chessboard_container">
    <template>
      <ul v-for="(item, index) of this.chessList" :key="index">
        <li v-for="obj of item" :key="obj.index" :class="className(obj.value)" @click="paly_chess($event, obj.index)">
          <span></span>
        </li>
      </ul>
    </template>
    <WinAnimation v-if="winFlag" :whoWin="curPlayer"></WinAnimation>
    <WinPopBox v-if="winFlag" :whoWin="curPlayer"></WinPopBox>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import WinAnimation from './WinAnimation';
import WinPopBox from './WinPopBox';

export default {
  name: 'Chessboard',
  components: { WinAnimation, WinPopBox },
  data () {
    return {
      winFlag: false,
      // 动态组件
      dymamicComponent: '',
      color: 'false',
      // 表示当前是谁在下棋
      curPlayer: '',
      // 数组表示棋子赢了的可能的排列组合
      wincoditionsList: [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
      ]
    }
  },
  computed: {
    ...mapGetters(['chessList']),

    className () {
      return value => {
        if (!value) return ''
        return value === 'player' ? 'chessmanBlue' : 'chessmanRed'
      }
    },

    ununllNum () {
      return this.chessList.flat().filter(ele => ele.value !== '').length;
    }
  },

  methods: {
    // 辅助函数映射
    ...mapMutations(['set_mode', 'set_role', 'change_value']),
    // 电脑下棋的逻辑
    copmputerPlay (index) {
      this.curPlayer = 'computer';
      // index 参数是从pay_chess函数传递的玩家自主决定的下棋的位置的index
      // 电脑怎么判断在什么地方下棋
      // 首先应该是判断自己现在能不能赢
      const leftList = this.chessList.flat().filter(ele => ele.value === '');
      // 随机挑选这个数组中的一个对象的index作为index传入
      if (!leftList.length) return
      const randomNum = Math.floor(Math.random() * leftList.length);
      const indexPara = leftList[randomNum].index;
      this.change_value({ index: indexPara, value: 'computer' });
      this.winConditions('computer');
    },

    // 玩家执棋
    paly_chess (e, index) {
      // 将当前下棋者切换位玩家
      this.curPlayer = 'player';
      // ru如果赢了之后 不在执行这个函数
      if (this.winFlag) return
      // 判断当前这地方是否已经有棋子
      if (this.chessList.flat()[index - 1].value) return
      // 改变当前点击的格子的状态value，确定是玩家自己下棋的格子
      this.change_value({ index, value: 'player' });
      if (this.winConditions('player')) return false;
      this.copmputerPlay(index);
    },

    // 关于判断是否有一方已经赢了的问题
    winConditions (color) {
      // 定义棋子取胜的情况
      // 判断绿棋子赢了的情况
      const listByPlayer = [];
      const curList = this.chessList.flat().filter(ele => ele.value === color);
      if (curList.length <= 2) return
      curList.forEach(ele => {
        listByPlayer.push(ele.index);
      });
      // 判断生成的数组是否包含了稳conditions中的任何一种
      const whetherWin = this.wincoditionsList.some(ele => {
        return ele.every(element => listByPlayer.includes(element))
      }
      );
      // 写胜利后的样式
      if (whetherWin) {
        // 渲染一方胜利的组件
        this.winFlag = true
      };
      return whetherWin;
    }
  },
  watch: {
    chessList: {
      immediate: true,
      deep: true,
      handler: function () {
      }
    }
  }
}
  // 监听数组的变化 判断是否有一方已经赢了
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
