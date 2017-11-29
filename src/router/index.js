import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import Users from '@/components/Users';
import UserDetail from '@/components/UserDetail';
import Skills from '@/components/Skills';
import SkillDetail from '@/components/SkillDetail';

Vue.use(Router);
Vue.use(VueResource);
if (process.env.NODE_ENV === 'development') {
  Vue.http.options.root = process.env.BACK_END;
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Users,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/users/:id',
      name: 'UserDetail',
      component: UserDetail,
      props: true,
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
    },
    {
      path: '/skills/:id',
      name: 'SkillDetail',
      component: SkillDetail,
      props: true,
    },
  ],
});
