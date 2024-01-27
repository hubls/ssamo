<template>
  <div>
    <h1>웹툰 모음 페이지</h1>
    <UploadModal  ref="uploadModal" v-if="isUploadModalView" @close-modal="closeUploadModal" @open-modal="openUploadModal">
    </UploadModal>

<!--    <b-button @click="openUploadModal">등록</b-button>-->

    <div>
      <Board :table-data="webtoonsData" />
    </div>
  </div>
</template>

<script>
import Board from "../layout/Board.vue";
import UploadModal from "../layout/Upload.vue";
import axios from "axios";

export default {
  components: {
    Board,
    UploadModal
  },

  data() {
    return {
      webtoonsData: [],
      isUploadModalView: false
    }
  },

  mounted() {
    this.getWebtoonsData();
  },

  methods: {
    async getWebtoonsData() {
      try {
        const response = await axios.get("/api/board/webtoons");
        this.webtoonsData = response.data;
      } catch (error) {
        console.error("Error getting webtoons data: ", error);
      }
    },

    openUploadModal() {
      console.log(this.isUploadModalView);
      this.isUploadModalView = true;
    },

    closeUploadModal() {
      this.isUploadModalView = false;
      this.$refs.uploadModal.resetWebtoonData();
    }
  }
};
</script>
