import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddContact from '@/components/AddContact'
import ContactDetail from '@/components/ContactDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/detail/:id',
      name: 'ContactDetail',
      component: ContactDetail,
      props: true
    }
  ]
});
