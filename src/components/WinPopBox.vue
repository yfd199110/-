<template>
  <div class="winpopbox_container">
    {{whoWin}}赢了
  </div>
</template>

<script>
export default {
  name: 'WinPopBox',
  props: ['whoWin']
}
</script>

<style scoped>
.winpopbox_container {
  width: 250px;
  height: 30px;
  position: absolute;
  left: 45px;
  top: 155px;
  text-align: center;
  line-height: 30px;
  color: transparent;
  animation: popBox 2s ease .3s normal backwards;
}

@keyframes popBox {
  from { top: 155px; } to { top: -30px; };
  from { background-color: transparent; } to { background-color: #104785; };
  from { color: transparent; } to { color: red; };
}
</style>
