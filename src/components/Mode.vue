<template>
  <div class="modeText">
    <p>How do you want to play?</p>
    <section>
      <span @click="goSelectRole('onePlayer')">One Player</span>
      <span @click="goSelectRole('twoPlayer')">Two Player</span>
    </section>
  </div>
</template>

<script>
export default {
  name: "Mode",
  data () {
    return {
    };
  },
  methods: {
    goSelectRole (val) {
      this.$store.commit('set_mode', val);
      this.$router.push('/Role');
    },
  },
};
</script>

<style scoped>
.modeText {
  text-align: center;
}
section {
  display: flex;
  justify-content: space-around;
}
p {
  margin-top: 40px;
  font-size: 50px;
  color: white;
  text-align: center;
}
span {
  font-size: 20px;
  color: gray;
  text-align: center;
}
span:hover {
  cursor: pointer;
  border: 1px dotted white;
  border-radius: 20px;
  padding: 5px;
}
</style>
