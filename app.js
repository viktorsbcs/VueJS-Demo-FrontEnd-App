const routes = [
  { path: "/", component: User },
  { path: "/user", component: User },
  { path: "/all-users", component: AllUsers },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");
