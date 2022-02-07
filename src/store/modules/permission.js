import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
import { getMenuInfo } from '@/api/user'
import routerMap from '@/router/generator-routers'
import store from '@/store'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission(permission, route) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id)
  } else {
    return true
  }
}

function filterAsyncRouter(routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles.permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, { accessedRoutes, btnList }) {
      return new Promise(async (resolve, reject) => {
        let routerData = assembleMenuItem(accessedRoutes)
        // routerData = routeFilter(routerData)
        const accessRoutes = formateRotes(routerData, btnList)
        asyncRouterMap[0].children = accessRoutes
        commit('SET_ROUTERS', asyncRouterMap)
        resolve()
      })
    }
  }
}

const formateRotes = (menusList, btnList = [], isRoot = true, parentPath = '') => {
  const allAsyncRouters = []
  menusList.forEach(menu => {
    let { resCode, isHidden, icon, sort, title, children, permissionResCode, routePath } = menu
    const isSingleRoute = isRoot && menu.children.length === 0
    const permissions = generatePermission(btnList, resCode)
    let router = null
    if (isSingleRoute) {
      router = {
        path: `/${routePath}`,
        component: routerMap[routePath].component,
        meta: {
          title,
          icon,
          permissionResCode,
          permissions,
          // 动态路由添加入参
          props: routerMap[routePath] ? routerMap[routePath].props : null
        },
        name: routePath
      }
    } else {
      let route = parentPath ? routerMap[`${parentPath}/${routePath}`] : routerMap[`${routePath}`]
      if (route && Object.keys(route).indexOf('hidden') > -1) {
        isHidden = route.hidden
      }
      router = {
        key: resCode,
        path: isRoot ? `/${routePath}` : routePath,
        hidden: !!isHidden,
        name: routerMap[`${parentPath}/${routePath}`]
          ? routerMap[`${parentPath}/${routePath}`].name
          : routePath + '/' + resCode,
        meta: {
          icon,
          title: route?.title || title,
          permissionResCode,
          permissions,
          // 动态路由添加入参
          props: routerMap[`${parentPath}/${routePath}`] ? routerMap[`${parentPath}/${routePath}`].props : null
        },
        children:
          children && children.length > 0
            ? formateRotes(children, btnList, false, `${parentPath ? parentPath + '/' : ''}${routePath}`)
            : [],
        sort: sort,
        isDisabled: false
      }
      if (isRoot) {
        router.component = RouteView
      } else {
        if (routerMap[`${parentPath}/${routePath}`]) {
          router.component = routerMap[`${parentPath}/${routePath}`].component
        } else {
          router.component = () => import('@/views/common/index.vue')
        }
      }
      if (!isRoot && children.length === 0) delete router.children
    }
    allAsyncRouters.push(router)
  })
  return allAsyncRouters
}

const generatePermission = (btnList = [], parentCode) => {
  const permission = []
  btnList.forEach(btn => {
    if (btn.parentCode === parentCode) {
      let perList = btn.code.split('_')
      permission.push(perList[perList.length - 1])
    }
  })
  return permission
}

// 过滤children不存在的路由
const routeFilter = routeList => {
  return routeList.filter(item => {
    if (item.children && item.children.length > 0) {
      return true
    }
  })
}

/**
 * @description 迭代整理接口返回的权限列表
 * @param {Array} menuList 权限列表
 */
const assembleMenuItem = menuList => {
  let list = []
  menuList.forEach(item => {
    let temp = {
      resId: getUUID(),
      sort: 0,
      title: item.name,
      resType: 'MENU',
      permissionResCode: item.routePath,
      resCode: item.code,
      parentResCode: item.parentCode,
      scope: 'PLATFORM',
      routePath: item.routePath,
      icon: item.icon,
      orgId: '',
      children: [],
      btnList: []
    }
    if (item.children && item.children.length > 0) {
      list.push(temp)
      temp.children = [...temp.children, ...assembleMenuItem(item.children)]
    } else {
      list.push(temp)
    }
  })
  return list
}

const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16) | 0 : 'r&0x3' | '0x8').toString(16)
  })
}

export default permission
