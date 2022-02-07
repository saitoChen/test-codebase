import storage from 'store'
import { login, getInfo, logout } from '@/api/login'
import { getMenuInfo } from '@/api/user'
import { USER, LOGIN, ACCESS_TOKEN } from '@/store/mutation-types'
import { setToken, setUserId, setLoginSource, resetLocalStorageInfo } from '@/utils/auth'
import store from '@/store'
const getters = {
  userInfo(state) {
    return state.userInfo
  }
}

const user = {
  namespaced: true,
  state: {
    token: '',
    name: '',
    avatar: '',
    introduction: '',
    welcome: '',
    roles: [],
    account: '',
    info: {},
    nickName: '',
    instanceId: '',
    extension: '' // 用户类型标识 0:内部用户 1:外部用户
  },

  getters,

  mutations: {
    SET_INSTANCE_ID: (state, instanceId) => {
      state.instanceId = instanceId
    },
    SET_NICK_NAME: (state, nickName) => {
      localStorage.setItem('nickName', nickName)
      state.nickName = nickName
    },
    SET_ACCOUNT: (state, account) => {
      localStorage.setItem('userName', account)
      state.account = account
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_EXTENSION: (state, extension) => {
      state.extension = extension
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(async res => {
            if (Number(res.resultCode) === 0) {
              const { data } = res
              setToken(data.token)
              setUserId(data.userId)
              setLoginSource(userInfo.loginSource)
              resolve(res)
            } else {
              console.log(res.resultMsg)
              reject()
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetResource({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await getMenuInfo()
          const { buttons, menus, roleSet, instanceId, userName, nickName, extension } = result.data
          const accessedRoutes = filterByBlackList(menus, blackList)
          commit('SET_INSTANCE_ID', instanceId)
          commit('SET_ACCOUNT', userName)
          commit('SET_NICK_NAME', nickName)
          commit('SET_EXTENSION', extension)
          resolve({
            accessedRoutes,
            roleSet,
            msg: 'success',
            btnList: buttons
          })
        } catch (err) {
          resolve({
            accessedRoutes: [],
            roleSet: [],
            msg: 'error',
            btnList: []
          })
        }
      })
    },
    // 清空登录信息
    ResetInfo({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          commit('SET_INSTANCE_ID', '')
          commit('SET_ACCOUNT', '')
          commit('SET_NICK_NAME', '')
          commit('SET_EXTENSION', '')
          commit('SET_ROLES', '')
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')
          commit('SET_INTRODUCTION', '')
          resetLocalStorageInfo()
          resolve()
        } catch (err) {
          reject(err)
        }
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise(async (resolve, reject) => {
        const data = {
          roles: ['admin'],
          introduction: 'I am a super administrator',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          name: 'Super Admin'
        }
        const { roles, name, avatar, introduction } = data
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        const result = await store.dispatch('user/GetResource')
        const { accessedRoutes, msg, btnList } = result
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve({ accessedRoutes, msg, btnList })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise(resolve => {
        logout(state.token)
          .then(async () => {
            await store.dispatch('user/ResetInfo')
            resolve()
          })
          .catch(() => {
            resolve()
          })
          .finally(() => {})
      })
    }
  }
}

const blackList = []

const filterByBlackList = (menus, blackList) => {
  for (let i in menus) {
    if (blackList.includes(menus[i].routePath)) {
      menus.splice(i, 1)
    }
  }
  return menus
}

// mutations
const mutations = {
  [USER.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo
  }
}

export default user
