import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/* path compile */
// function _import(file) {
//   // return () => import(`@/views/${file}`);
//   return () => Promise.resolve().then(() => require(`@/views/${file}`));
// }

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "控制台", icon: "dashboard" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
];
export const asyncRoutes = [
  {
    name: "player",
    path: "/player",
    component: Layout,
    redirect: "/player/players/list",
    meta: {
      title: "用户管理",
      icon: "player",
    },
    children: [
      {
        name: "PlayesList",
        path: "players/list",
        component: () => import("@/views/player/playerList/index"),
        meta: {
          title: "用户列表",
        },
      },
    ],
  },
  {
    name: "economy",
    path: "/economy",
    component: Layout,
    redirect: "/economy/order/list",
    meta: {
      title: "经济系统",
      icon: "jinji",
    },
    children: [
      {
        name: "OrdeList",
        path: "order/list",
        component: () => import("@/views/economy/orderList/index"),
        meta: {
          title: "充值订单",
        },
      },
      {
        name: "OrderData",
        path: "order/data",
        component: () => import("@/views/economy/orderData/index"),
        meta: {
          title: "充值数据",
        },
      },
    ],
  },
  {
    name: "resource",
    path: "/resource",
    component: Layout,
    redirect: "/resource/resource-list",
    meta: {
      title: "资源管理",
      icon: "datas",
    },
    children: [
      {
        name: "resourceList",
        path: "resource-list",
        component: () => import("@/views/resource/resourceList/index"),
        meta: {
          title: "资源列表",
        },
      },
      {
        name: "classifyConfig",
        path: "classify-config",
        component: () => import("@/views/resource/classifyConfig/index"),
        meta: {
          title: "分类配置",
        },
      },
    ],
  },
  {
    name: "system",
    path: "/system",
    component: Layout,
    redirect: "/system/account/list",
    meta: {
      title: "系统管理",
      icon: "setting",
    },
    children: [
      {
        name: "accountList",
        path: "account/list",
        component: () => import("@/views/system/accountList/index"),
        meta: {
          title: "账号管理",
        },
      },
      {
        name: "resetPassword",
        path: "password/reset",
        component: () => import("@/views/system/resetPassword/index"),
        meta: {
          title: "修改密码",
        },
      },
    ],
  },
];

export const anyRoutes = [{ path: "*", redirect: "/404", hidden: true }];

export const All_STATIC_ROUTES = [].concat(
  constantRoutes,
  asyncRoutes,
  anyRoutes
);

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: All_STATIC_ROUTES,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
