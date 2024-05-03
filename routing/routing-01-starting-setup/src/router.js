import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        },
      ] /*, alias: '/' */,
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    //console.log(to, from, savedPosition);
    //retourner là ou on etait en cliquant sur retour
    if (savedPosition) {
      return savedPosition;
    }
    //toujours en haut de la page aprés click
    return { left: 0, top: 0 };
  },
});
router.beforeEach(function (to, from, next) {
  console.log('Global before each');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth');
    next();
  } else {
    next();
  }
  //just pour demo academique
  /*if (to.name === 'team-members') {
    next();
  } else {
    next({ name: 'team-members', params: { teamId: 't3' } });
  }*/
  next();
});
router.afterEach((to, from) => {
  //sending analytics data
  console.log('Global after each');
  console.log(to, from);
});

export default router;
