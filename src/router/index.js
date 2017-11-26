import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Users from '@/components/Users';

Vue.use(Router);
Vue.use(VueResource);
Vue.http.options.root = process.env.BACK_END;

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'Users',
      component: Users,
    },
  ],
});
