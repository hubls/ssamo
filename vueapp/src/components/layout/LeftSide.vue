<template>
  <div class="row">
    <div class="col-12 image-container" v-for="image in imageData" :key="image" @click="redirectUrl(image.url)">
      <img :src="`/api/image/${image.imagePath}/${image.imageName}`" alt="이미지" class="full-width" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageData: [
        { name: '네이버', imageName: 'naver.png', imagePath: 'leftside', url: 'https://www.naver.com' },
        { name: '구글', imageName: 'google.png', imagePath: 'leftside', url: 'https://www.google.co.kr' },
        { name: '다음', imageName: 'daum.png', imagePath: 'leftside', url: 'https://www.daum.net' },
        { name: '네이트', imageName: 'nate.jpg', imagePath: 'leftside', url: 'https://www.nate.com' },
        { name: '줌', imageName: 'zum.jpg', imagePath: 'leftside', url: 'https://zum.com' },
        { name: '빙', imageName: 'bing.jpg', imagePath: 'leftside', url: 'https://www.bing.com' },
        { name: '바이두', imageName: 'baidu.png', imagePath: 'leftside', url: 'https://www.baidu.com' },
        { name: '소우거우', imageName: 'sogou.png', imagePath: 'leftside', url: 'https://www.sogou.com' }
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
  position: relative; /* 자식 요소의 위치를 상대적으로 조정하기 위해 사용 */
}

.full-width {
  position: absolute; top:0; left: 0;
  width: 100%;
  height: 100%;
}
</style>
