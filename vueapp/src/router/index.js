import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../components/views/Home";
import Webtoons from "../components/views/Webtoons";
import Community from "../components/views/Community.vue";
import Portal from "../components/views/Portal.vue";
import News from "../components/views/News.vue";
import Music from "../components/views/Music.vue";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/webtoons',
      name: 'Webtoons',
      component: Webtoons
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/portal',
      name: 'Portal',
      component: Portal
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    }
  ]
})
