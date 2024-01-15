<template>
  <div class="row">
    <div class="col-12 image-container" v-for="image in imageData" :key="image" @click="redirectUrl(image.url)">
      <img :src="require(`@/assets/leftside/${image.path}`)" alt="이미지" class="full-width" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageData: [
        {name: '네이버', path: 'naver.png', url: 'https://www.naver.com'},
        {name: '구글', path: 'google.png', url: 'https://www.google.co.kr'},
        {name: '다음', path: 'daum.png', url: 'https://www.daum.net'},
        {name: '네이트', path: 'nate.jpg', url: 'https://www.nate.com'},
        {name: '줌', path: 'zum.jpg', url: 'https://zum.com'},
        {name: '빙', path: 'bing.jpg', url: 'https://www.bing.com'},
        {name: '바이두', path: 'baidu.png', url: 'https://www.baidu.com'},
        {name: '소우거우', path: 'sogou.png', url: 'https://www.sogou.com'}
      ]
    }
  },

  methods: {
    redirectUrl(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style>
.image-container {
  background-color: white;
  border: 1px solid;
  height: 100px;
  cursor: pointer;
  overflow: hidden; /* 이미지가 부모 요소를 벗어나지 않도록 숨김 처리 */
  position: relative; /* 자식 요소의 위치를 상대적으로 조정하기 위해 사용 */
}

.full-width {
  position: absolute; top:0; left: 0;
  width: 100%;
  height: 100%;
}
</style>
