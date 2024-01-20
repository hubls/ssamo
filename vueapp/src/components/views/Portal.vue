<template>
  <div>
    <h1>포털 모음 페이지</h1>
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
      portalData: []
    }
  },

  mounted() {
    this.getPortalData();
  },

  methods: {
    async getPortalData() {
      try {
        const response = await axios.get("/api/board/portalData");
        this.portalData = response.data; // API에서 받아온 데이터를 설정
      } catch (error) {
        console.error("Error getting portal data: ", error);
      }
    }
  }
};
</script>