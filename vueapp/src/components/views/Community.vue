<template>
  <div>
    <h1>커뮤니티 모음 페이지</h1>
    <div>
      <Board :table-data = "communityData" />
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
      communityData: []
    }
  },

  mounted() {
    this.getCommunityData();
  },

  methods: {
    async getCommunityData() {
      try {
        const response = await axios.get("/api/board/community");
        this.communityData = response.data; // API에서 받아온 데이터를 설정
      } catch (error) {
        console.error("Error getting community data: ", error);
      }
    }
  }
};
</script>
