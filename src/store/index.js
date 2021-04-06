import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 选择了人机对玩还是双人游戏模式
    mode: 'single(default)',
    // 选择了X还是O
    role: 'X(default)',
    // 棋子记录数组
    chessman_list: [
      [{ value: '', index: 1 }, { value: '', index: 2 }, { value: '', index: 3 }], [{ value: '', index: 4 }, { value: '', index: 5 }, { value: '', index: 6 }], [{ value: '', index: 7 }, { value: '', index: 8 }, { value: '', index: 9 }]]
  },
  // 同步改变state
  mutations: {
    set_mode (state, val) {
      state.mode = val
    },
    set_role (state, val) {
      state.role = val
    }
  }
})
export default store
