import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import properties from '@/views/properties'
import admin from '@/views/admin'
import login from '@/views/login'
import signin from '@/views/signin'
import services from '@/views/services'
import about from '@/views/about'
import contact from '@/views/contact'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path: '/properties',
    	name: 'properties',
    	component: properties
    },
    {
    	path: '/admin',
    	name: 'admin',
    	component: admin
    },
    {
    	path: '/login',
    	name: 'login',
    	component: login
    },
    {
    	path: '/signin',
    	name: 'signin',
    	component: signin
    },
    {
    	path: '/services',
    	name: 'services',
    	component: services
    },
    {
    	path: '/about',
    	name: 'about',
    	component: about
    },
    {
    	path: '/contact',
    	name: 'contact',
    	component: contact
    }
  ]
})
