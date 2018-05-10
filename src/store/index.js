import Vue from 'vue'
import vuex from 'vuex'
import * as types from './types'

Vue.use(vuex)

export default new vuex.Store({
  state: {
    show: false,
    user: {},
    token: window.localStorage.getItem('token'),
    title: ''
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    }
  }
})
