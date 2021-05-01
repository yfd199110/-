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
    <transition name="winPopBox">
      <!-- 关于这个组件的三种不同的形态, 分别是谁在下棋,谁赢了,使用keep-alive组件 -->
      <keep-alive>
        <!-- 如果传递参数来进行不同弹框容和样式的转换 -->
        <WinPopBox :whoPlay="curPlayer" v-show="true" :anyoneWin="winFlag"></WinPopBox>
      </keep-alive>
    </transition>
    <!-- 重置按钮,这个按钮会将游戏导向最开始的页面,并且清除数据 -->
    <button class="reset" title="该功能会将所有的对局信息全部清除" @click="reset">重置</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import WinAnimation from './WinAnimation';
import WinPopBox from './WinPopBox';

export default {
  name: 'Chessboard',
  components: { WinAnimation, WinPopBox },
  data () {
    return {
      // playchess函数的执行开关
      playchessContral: true,
      currentPlayerMark: false,
      winFlag: false,
      // 动态组件
      dymamicComponent: '',
      color: 'false',
      // 表示当前是谁在下棋
      curPlayer: 'player',
      // 数组表示棋子赢了的可能的排列组合
      wincoditionsList: [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
      ]
    }
  },
  computed: {
    ...mapState({
      chessList: 'chessman_list'
    }),

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
    ...mapMutations(['set_mode', 'set_role', 'change_value', 'reset_chessman_list']),
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
      // 如果电脑赢得了比赛,就禁止继续向组件传递谁在下棋的数据信息
      if (this.winConditions('computer')) return false;
      this.curPlayer = 'player';
      this.playchessContral = true;
    },

    // 玩家执棋
    paly_chess (e, index) {
      // 判断这个函数的控制开关是否时允许这个函数执行
      if (!this.playchessContral) return
      // 将当前下棋者切换位玩家
      this.curPlayer = 'player';
      // // 如果赢了之后 不在执行这个函数
      if (this.winFlag) return
      console.log('test');
      // 判断当前这地方是否已经有棋子
      if (this.chessList.flat()[index - 1].value) return
      // 改变当前点击的格子的状态value，确定是玩家自己下棋的格子
      this.change_value({ index, value: 'player' });
      if (this.winConditions('player')) return false;
      setTimeout(this.copmputerPlay, 500, index);
      // 解决提示栏的显示谁该下棋的问题
      this.curPlayer = 'computer';
      this.playchessContral = false;
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
    },

    // 重置时 执行函数
    reset () {
      this.reset_chessman_list();
      this.winFlag = false;
      this.playchessContral = true;
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
.reset {
  position: absolute;
  bottom: -27.5px;
  height: 25px;
  right: 0;
  width: 50px;
  border-radius: 10px;
}
/* 组件动画 */
.winPopBox-enter-active {
  animation: winFlagUp 2s forwards;
}

@keyframes winFlagUp {
  0% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
