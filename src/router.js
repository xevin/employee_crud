import Vue from 'vue';
import Router from 'vue-router';
import List from '@/views/List.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Employee list',
      component: List,
    },
    {
      path: '/add',
      name: 'Add Employee',
      component: () => import(/* webpackChunkName: "employeeAdd" */ '@/views/Add.vue'),
    },
    {
      path: '/edit/:id',
      name: 'Edit Employee',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "employeeEdit" */ '@/views/Edit.vue'),
    },
  ],
});
