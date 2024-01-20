<template>
  <div>
    <h1>쇼핑 모음 페이지</h1>
    <div>
      <Board :table-data = "shoppingData" />
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
      shoppingData: []
    }
  },

  mounted() {
    this.getShoppingData();
  },

  methods: {
    async getShoppingData() {
      try {
        const response = await axios.get("/api/board/shopping");
        this.shoppingData = response.data; // API에서 받아온 데이터를 설정
      } catch (error) {
        console.error("Error getting shopping data: ", error);
      }
    }
  }
};
</script>