import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../components/views/Home";
import Webtoons from "../components/views/Webtoons";
import Community from "../components/views/Community.vue";
import Game from "../components/views/Game.vue";
import News from "../components/views/News.vue";
import Shopping from "../components/views/Shopping.vue";

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
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    }
  ]
})
