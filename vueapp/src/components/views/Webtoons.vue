<template>
  <div>
    <h1>웹툰 모음 페이지</h1>
    <div>
      <Board :table-data = "webtoonsData" />
    </div>
  </div>
</template>

<script>
import Board from "../layout/Board.vue";

export default {
  components: {
    Board
  },

  data() {
    return {
      webtoonsData: [
        {name: '네이버웹툰', url: 'https://comic.naver.com', imageName: 'naverwebtoon.png', visitorCount: 1900},
        {name: '카카오웹툰', url: 'https://webtoon.kakao.com', imageName: 'kakaowebtoon.png', visitorCount: 1800},
        {name: '탑툰', url: 'https://toptoon.com', imageName: 'toptoon.png', visitorCount: 1700},
        {name: '레진코믹스', url: 'https://www.lezhin.com', imageName: 'lezhin.jpg', visitorCount: 1600},
        {name: '리디', url: 'https://ridibooks.com', imageName: 'ridibooks.png', visitorCount: 1500},
        {name: '투믹스', url: 'https://www.toomics.com', imageName: 'toomics.png', visitorCount: 1400},
        {name: '무툰', url: 'https://www.mootoon.co.kr', imageName: 'mootoon.jpg', visitorCount: 1300},
        {name: '봄툰', url: 'https://www.bomtoon.com', imageName: 'bomtoon.jpg', visitorCount: 1200},
        {name: '코미코', url: 'https://www.comico.kr', imageName: 'comico.jpg', visitorCount: 1100},
        {name: '마나', url: 'https://mana.so', imageName: 'mana.png', visitorCount: 1000}
      ]
    }
  }
};
</script>
