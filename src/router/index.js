import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

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
    redirect: "/student-dashboard",
    meta: { title: "首页", icon: "dashboard" },
    children: [
      {
        path: "student-dashboard",
        name: "student-dashboard",
        component: () => import("@/views/dashboard/student"),
        meta: { title: "学生首页", icon: "dashboard" },
      },
      {
        path: "approve-dashboard",
        name: "approve-dashboard",
        component: () => import("@/views/dashboard/approve"),
        meta: { title: "审批员首页", icon: "dashboard" },
      },
      {
        path: "activityManager-dashboard",
        name: "activityManager-dashboard",
        component: () => import("@/views/dashboard/activityManager"),
        meta: { title: "专业管理员首页", icon: "dashboard" },
      },
      {
        path: "yearManager-dashboard",
        name: "yearManager-dashboard",
        component: () => import("@/views/dashboard/yearManager"),
        meta: { title: "学院管理员首页", icon: "dashboard" },
      },
    ],
  },
  {
    path: "/student",
    component: Layout,
    redirect: "/student/morals",
    name: "morals",
    meta: { title: "学生综测流程", icon: "el-icon-s-help" },
    children: [
      {
        path: "wisdom",
        name: "wisdom",
        component: () => import("@/views/student/wisdom"),
        meta: { title: "智育分提交", icon: "table" },
      },
      {
        path: "morals",
        name: "morals",
        component: () => import("@/views/student/morals"),
        meta: { title: "德育分提交", icon: "table" },
      },
      {
        path: "sports",
        name: "sports",
        component: () => import("@/views/student/morals"),
        meta: { title: "体育分提交", icon: "table" },
      },
      {
        path: "labour",
        name: "labour",
        component: () => import("@/views/student/morals"),
        meta: { title: "劳育分提交", icon: "table" },
      },
    ],
  },
  {
    path: "/year",
    component: Layout,
    redirect: "/year/activity",
    name: "year",
    meta: { title: "活动管理流程", icon: "el-icon-s-help" },
    children: [
      {
        path: "activity",
        name: "activity",
        component: () => import("@/views/year/activity"),
        meta: { title: "活动录入", icon: "table" },
      },
      {
        path: "students",
        name: "students",
        component: () => import("@/views/year/students"),
        meta: { title: "学生录入", icon: "table" },
      },
      {
        path: "grade",
        name: "grade",
        component: () => import("@/views/year/grade"),
        meta: { title: "分数录入", icon: "table" },
      },
    ],
  },
  {
    path: "/approve",
    component: Layout,
    redirect: "/approve/studentApprove",
    name: "approve",
    meta: { title: "审批流程", icon: "el-icon-s-help" },
    children: [
      {
        path: "studentApprove",
        name: "studentApprove",
        component: () => import("@/views/approve/student"),
        meta: { title: "学生审批管理", icon: "table" },
      },
      {
        path: "yearApprove",
        name: "yearstudents",
        component: () => import("@/views/approve/major"),
        meta: { title: "专业审批管理", icon: "table" },
      },
    ],
  },
  // {
  //   path: "/example",
  //   component: Layout,
  //   redirect: "/example/table",
  //   name: "Example",
  //   meta: { title: "Example", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "table",
  //       name: "Table",
  //       component: () => import("@/views/table/index"),
  //       meta: { title: "Table", icon: "table" },
  //     },
  //     {
  //       path: "tree",
  //       name: "Tree",
  //       component: () => import("@/views/tree/index"),
  //       meta: { title: "Tree", icon: "tree" },
  //     },
  //   ],
  // },

  // {
  //   path: "/form",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "Form",
  //       component: () => import("@/views/form/index"),
  //       meta: { title: "Form", icon: "form" },
  //     },
  //   ],
  // },

  // {
  //   path: "/nested",
  //   component: Layout,
  //   redirect: "/nested/menu1",
  //   name: "Nested",
  //   meta: {
  //     title: "Nested",
  //     icon: "nested",
  //   },
  //   children: [
  //     {
  //       path: "menu1",
  //       component: () => import("@/views/nested/menu1/index"), // Parent router-view
  //       name: "Menu1",
  //       meta: { title: "Menu1" },
  //       children: [
  //         {
  //           path: "menu1-1",
  //           component: () => import("@/views/nested/menu1/menu1-1"),
  //           name: "Menu1-1",
  //           meta: { title: "Menu1-1" },
  //         },
  //         {
  //           path: "menu1-2",
  //           component: () => import("@/views/nested/menu1/menu1-2"),
  //           name: "Menu1-2",
  //           meta: { title: "Menu1-2" },
  //           children: [
  //             {
  //               path: "menu1-2-1",
  //               component: () =>
  //                 import("@/views/nested/menu1/menu1-2/menu1-2-1"),
  //               name: "Menu1-2-1",
  //               meta: { title: "Menu1-2-1" },
  //             },
  //             {
  //               path: "menu1-2-2",
  //               component: () =>
  //                 import("@/views/nested/menu1/menu1-2/menu1-2-2"),
  //               name: "Menu1-2-2",
  //               meta: { title: "Menu1-2-2" },
  //             },
  //           ],
  //         },
  //         {
  //           path: "menu1-3",
  //           component: () => import("@/views/nested/menu1/menu1-3"),
  //           name: "Menu1-3",
  //           meta: { title: "Menu1-3" },
  //         },
  //       ],
  //     },
  //     {
  //       path: "menu2",
  //       component: () => import("@/views/nested/menu2/index"),
  //       name: "Menu2",
  //       meta: { title: "menu2" },
  //     },
  //   ],
  // },

  // {
  //   path: "external-link",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "https://panjiachen.github.io/vue-element-admin-site/#/",
  //       meta: { title: "External Link", icon: "link" },
  //     },
  //   ],
  // },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
