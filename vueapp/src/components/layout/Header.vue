<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">사이트 모음</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
            <b-icon :icon="item.icon"></b-icon>
          {{item.title}}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {
      menuItems: [
        { title: '웹툰', path: '/webtoons', icon: 'rainbow'},
        { title: '커뮤니티', path: '/community', icon: 'person-circle' },
        { title: '게임', path: '/game', icon: 'rainbow' },
        { title: '뉴스', path: '/news', icon: 'newspaper'},
        { title: '쇼핑', path: '/shopping', icon: 'shop'}
      ]
    }
  }
};
</script>

