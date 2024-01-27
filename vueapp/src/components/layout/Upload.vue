<template>
  <div class="modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-card">
      <div class="modal-content">
        <h2>웹툰 업로드</h2>
        <b-form @submit.prevent="submitForm">
          <label for="name">Name</label>
          <b-input type="text" v-model="webtoonData.name" required />
          <br>

          <label for="url">URL</label>
          <b-input type="text" v-model="webtoonData.url" required />
          <br>

          <label for="image">이미지 업로드</label>
          <div>
            <b-input type="file" ref="imageInput" @change="handleImageUpload" accept="image/*" required />
          </div>
          <div v-if="webtoonData.image">
            <img :src="webtoonData.image" alt="웹툰 이미지" style="max-width: 100%; max-height: 200px;" />
          </div>

          <button type="button" @click="closeModal">닫기</button>
          <button type="submit">등록</button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webtoonData: {
        name: '',
        url: '',
        image: ''
      }
    };
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },

    submitForm() {
      // 모달 닫기
      this.closeModal();
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // Validate image size
        if (file.size > 1024 * 1024) {
          alert('이미지 크기는 1MB를 초과할 수 없습니다.');
          return;
        }

        // Validate image type
        if (!file.type.startsWith('image/')) {
          alert('올바른 이미지 형식이 아닙니다.');
          return;
        }

        // 파일을 읽어서 base64 형태로 저장
        const reader = new FileReader();
        reader.onload = (e) => {
          this.webtoonData.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    resetWebtoonData() {
      this.webtoonData = {
        name: '',
        url: '',
        image: ''
      };
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100; /* 특히 여기에 z-index 값을 높여주면 다른 요소들에 가려지지 않습니다. */
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-card {
  position: relative;
  background-color: white;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  padding: 20px;
}
</style>
