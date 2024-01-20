<template>
  <div>
    <h1>뉴스 모음 페이지</h1>
    <div>
      <Board :table-data = "newsData" />
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
      newsData: []
    }
  },

  mounted() {
    this.getNewsData();
  },

  methods: {
    async getNewsData() {
      try {
        const response = await axios.get("/api/board/news");
        this.newsData = response.data; // API에서 받아온 데이터를 설정
      } catch (error) {
        console.error("Error getting news data: ", error);
      }
    }
  }
};
</script>