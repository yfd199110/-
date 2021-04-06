<template>
  <div class="chessman_container" v-show="backColor"></div>
</template>

<script>
export default {
  name: 'Chessman_red',
  props: {
    backColor: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.chessman_container {
  background-color: tomato;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>
