const routes = [
  { path: "/", component: User },
  { path: "/user", component: User },
  { path: "/all-users", component: AllUsers },
];
// const router = new VueRouter({
//   routes: routes,
//   mode: "history",
//   base: "/",
// });

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

// var app = new Vue({
//   router: router,
// }).$mount('#app');

const app = Vue.createApp({});
app.use(router);
app.mount("#app");
