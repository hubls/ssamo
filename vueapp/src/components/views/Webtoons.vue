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
import axios from "axios";

export default {
  components: {
    Board
  },

  data() {
    return {
      webtoonsData: []
    }
  },

  mounted() {
    this.getWebtoonsData();
  },

  methods: {
    async getWebtoonsData() {
      try {
        const response = await axios.get("/api/webtoons");
        this.webtoonsData = response.data; // API에서 받아온 데이터를 설정
      } catch (error) {
        console.error("Error getting webtoons data: ", error);
      }
    }
  }
};
</script>
