<template>
  <div id="app">
    <Header />
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-md-2" style="background-color: orange; border: 1px solid; height: 800px">
          <left-side></left-side>
        </div>
        <div class="col-md-8">
          <div style="margin-top: 20px;"></div>
          <router-view></router-view>
        </div>
        <div class="col-md-2" style="background-color: blue; border: 1px solid; height: 800px">
          <right-side></right-side>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import LeftSide from "@/components/layout/LeftSide.vue";
import RightSide from "@/components/layout/RightSide.vue";

export default {
  name: 'App',
  components: {
    Header,
    LeftSide,
    RightSide
  },
}
</script>

<style>
@font-face {
  font-family: 'Jalnan2TTF';
  src: url('assets/fonts/Jalnan2TTF.ttf');
}

#app {
  font-family: 'Jalnan2TTF', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
