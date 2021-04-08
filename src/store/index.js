import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 选择了人机对玩还是双人游戏模式
    mode: 'single(default)',
    // 选择了X还是O
    role: 'X(default)',
    // 棋子记录数组,index是对应棋盘的位置index，value则记录棋子是哪一方的
    chessman_list: [
      [{ value: '', index: 1 }, { value: '', index: 2 }, { value: '', index: 3 }], [{ value: '', index: 4 }, { value: '', index: 5 }, { value: '', index: 6 }], [{ value: '', index: 7 }, { value: '', index: 8 }, { value: '', index: 9 }]]
  },
  getters: {
    chessList (state) {
      return state.chessman_list;
    },
    // 根据index拿到对应的那个对象
    findObj (state, index) {
      if (!state.chessman_list) return
      return state.chessman_list.forEach(ele => {
        return ele.find(el => el.index === index)
      })
    }
  },
  // 同步改变state
  mutations: {
    set_mode (state, val) {
      state.mode = val
    },

    set_role (state, val) {
      state.role = val
    },

    // 改变原始数据，更新组件里的状态
    change_value (state, payload) {
      if (!store.getters.chessList) return
      // 首先确定改变的对象在那一行，再确定在那一列
      state.chessman_list.forEach(ele => {
        if (!ele) return
        ele.forEach(el => {
          if (el.index === payload.index) {
            Vue.set(el, 'value', payload.value);
          }
        })
      })
    }
  }
})
export default store
