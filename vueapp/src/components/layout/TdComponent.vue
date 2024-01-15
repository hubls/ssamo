<template>
  <div class="col-md-4 custom-cell" style="border: 1px solid;" @click="redirectUrl(cellData.url)">
    <div class="image-container">
      <img :src="require(`@/assets/webtoons/${cellData.imageName}`)" alt="이미지" class="cell-image" />
    </div>
    <div class="platform-name">
      {{ cellData.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cellData: Object,
    rowIndex: Number,
    cellIndex: Number,
  },

  methods: {
    redirectUrl(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
.custom-cell {
  height: 200px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.image-container {
  position: absolute;
  top: 0; /* 상단에 배치 */
  left: 0;
  width: 100%;
  height: 80%; /* 이미지의 높이를 조정하여 확실하게 구분 */
}

.cell-image {
  width: 100%;
  height: 100%;
}

.platform-name {
  position: absolute;
  bottom: 0; /* 하단에 배치 */
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 배경색 추가 (선택 사항) */
  color: white; /* 텍스트 색상 설정 (선택 사항) */
  padding: 10px; /* 내부 패딩 추가 (선택 사항) */
  height: 40px;
}
</style>
