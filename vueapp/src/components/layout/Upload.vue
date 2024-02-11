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

          <label for="url">방문자수</label>
          <b-input type="text" v-model="webtoonData.visitorCount" required />
          <br>

          <label for="image">이미지 업로드</label>
          <input type="file" @change="handleImageUpload" accept="image/*" required />
          <div v-if="webtoonData.image">
            <img :src="webtoonData.image" alt="웹툰 이미지" style="max-width: 100%; max-height: 200px;" />
          </div>
          <br>

          <div class="button-group">
            <b-button @click="closeModal">닫기</b-button>
            <b-button type="submit">등록</b-button>
          </div>
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
        visitorCount: '',
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
        if (file.size > 10 * 1024 * 1024) {
          alert('이미지 크기는 10MB를 초과할 수 없습니다.');
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
        visitorCount: '',
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

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* 버튼과의 간격을 조정할 수 있습니다. */
}

/* 선택적으로 버튼 간격을 조정할 수 있습니다. */
.button-group > * {
  margin-right: 10px;
}

/* 마지막 버튼에는 오른쪽 여백을 주지 않습니다. */
.button-group > *:last-child {
  margin-right: 0;
}
</style>
