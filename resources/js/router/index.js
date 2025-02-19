import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import AboutPage from '../views/About.vue';
import ContactPage from '../views/Contact.vue';


const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
  ];
  

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
