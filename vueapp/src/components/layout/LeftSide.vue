<template>
  <div class="row">
    <div class="col-12 image-container" v-for="data in leftSideData" :key="data" @click="redirectUrl(data.url)">
      <img :src="`/api/image/${data.imagePath}/${data.imageName}`" alt="이미지" class="full-width" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      leftSideData: []
    }
  },

  mounted() {
    this.getLeftSideData();
  },

  methods: {
    redirectUrl(url) {
      window.open(url, '_blank');
    },

    async getLeftSideData() {
      try {
        const response = await axios.get("/api/side/leftside");
        this.leftSideData = response.data; // API에서 받아온 데이터를 설정
      } catch (error) {
        console.error("Error getting leftSide data: ", error);
      }
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
