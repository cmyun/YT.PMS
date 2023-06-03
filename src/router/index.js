import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import MemberView from "../views/MemberView.vue";
import GroupView from "../views/GroupView.vue";
import OrganizationView from "../views/OrganizationView.vue";
import MemberDetail from "../views/MemberDetail.vue";
import MemberEdit from "../views/MemberEdit.vue";
import TaskView from "../views/TaskView.vue";
import UserInfo from "../views/UserInfo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/member",
    name: "member",
    component: MemberView,
    // meta: { requiresAdmin: true }
  },
  { 
    path: '/member/:id', 
    name: "MemberDetail",
    component: MemberDetail,
    props: true,
    // meta: { requiresAdmin: true }
  },
  {
    path: '/member/edit/:id',
    name: 'MemberEdit',
    component: MemberEdit,
    props: true,
    // meta: { requiresAdmin: true }
  },
  {
    path: "/group",
    name: "group",
    component: GroupView,
  },
  {
    path: "/organization",
    name: "organization",
    component: OrganizationView,
    // meta: { requiresAdmin: true }
  },
  { 
    path: '/settings', 
    name: "UserInfo",
    component: UserInfo
  },
  { 
    path: '/tasks', 
    name: "TaskView",
    component: TaskView
  },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  // if (to.meta.requiresAdmin) {
  //   if(loggedIn){
  //     const userRole = loggedIn.isAdmin;
  //     if (!userRole) {
  //       next({ path: '/' })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   next();
  // }
  next();
})

export default router;
