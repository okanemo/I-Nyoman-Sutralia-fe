import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/home/Dashboard'
import Edituser from '../components/users/Edit'
import ViewPrevillage from '../components/previllage/View'
import ViewUser from '../components/users/View'
import Login from '../components/Login'
import guard from '../lib/guard';
import Forbidden from '../components/Forbidden'
import Profile from '../components/users/Profile'
import Notfound from '../components/Notfound'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Dashboard,
      name: 'home',
      beforeEnter: guard.guard
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/users/edit/:id',
      component: Edituser,
      name: 'edituser',
      beforeEnter: guard.guard
    },
    {
      path: '/users',
      component: ViewUser,
      name: 'viewuser',
      beforeEnter: guard.guard
    },
    {
      path: '/profile',
      component: Profile,
      name: 'Profile'
    },
    {
      path: '/previllage',
      component: ViewPrevillage,
      name: 'Previllage',
      beforeEnter: guard.guard
    },
    {
      path: '/Forbidden',
      component: Forbidden,
      name: 'Forbidden'
    },
    {
      path: '*',
      component: Notfound,
      name: 'Notfound'
    }

  ]
})
