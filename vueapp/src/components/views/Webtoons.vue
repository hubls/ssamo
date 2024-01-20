<template>
  <div>
    <h1>웹툰 모음 페이지</h1>
    <b-button @click="openModal">모달 열기</b-button>
      <modal ref="modal">
        <h2>안녕하세요.</h2>
        <p>반갑습니다.</p>
      </modal>
    <div>
      <Board :table-data = "webtoonsData" />
    </div>
  </div>
</template>

<script>
import Board from "../layout/Board.vue";
import Modal from "../layout/Upload.vue";
import axios from "axios";

export default {
  components: {
    Board,
    Modal
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
    openModal() {
      this.$refs.modal.showModal = true;
    },

    async getWebtoonsData() {
      try {
        const response = await axios.get("/api/board/webtoons");
        this.webtoonsData = response.data; // API에서 받아온 데이터를 설정
      } catch (error) {
        console.error("Error getting webtoons data: ", error);
      }
    }
  }
};
</script>
