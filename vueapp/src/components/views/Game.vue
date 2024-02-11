<template>
  <div>
    <h1>게임 모음 페이지</h1>
    <div>
      <Board :table-data = "gameData" />
    </div>
  </div>
</template>

<script>
import Board from "../layout/table/Board.vue";
import axios from "axios";

export default {
  components: {
    Board
  },

  data() {
    return {
      gameData: []
    }
  },

  mounted() {
    this.getGameData();
  },

  methods: {
    async getGameData() {
      try {
        const response = await axios.get("/api/board/game");
        this.gameData = response.data; // API에서 받아온 데이터를 설정
      } catch (error) {
        console.error("Error getting game data: ", error);
      }
    }
  }
};
</script>