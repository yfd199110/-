<template>
  <div :class="className"></div>
</template>

<script>
export default {
  name: 'WinAnimation',
  props: ['whoWin'],
  data () {
    return {
      className: ['winAnimation', this.whoWin]
    }
  }
}
</script>

<style scoped>
.winAnimation {
  width: 100px;
  height: 100px;
  position: absolute;
  width: 30px;
  height: 40px;
  bottom: -30px;
}
.player {
  left: -30px;
  animation: 2s linear  .5s 1 normal forwards flagMove_bottomToTop,
             1s linear  2.5s 1 normal forwards flagMove_leftToRight;
}
.computer {
  right: -30px;
  animation: 2s linear  .5s 1 normal forwards flagMove_bottomToTop,
  1s linear  2.5s 1 normal forwards flagMove_rightToLeft;
}
.winAnimation::before {
  content: '🚩';
  position: absolute;
  width: 20px;
  height: 30px;
  left: 5px;
  top: 5px;
}
/* 定义动画 animation */
@keyframes flagMove_bottomToTop {
  from { bottom: -30px; } to { bottom: 97.5%; };
}
@keyframes flagMove_leftToRight {
  from { left: -30px; } to { left: 5%; };
}
@keyframes flagMove_rightToLeft {
  from { right: -30px; } to { right: 5%; };
}
</style>
