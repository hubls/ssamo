<template>
  <div v-show="showModal" class="modal">
    <div class="modal-content">
      <!-- 모달 내용 -->
      <slot></slot>

      <!-- 모달 닫기 버튼 -->
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* 모달 스타일링을 위한 CSS */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  display: none; /* Vue 2에서는 v-show를 사용할 때 display: none을 직접 지정해줘야 합니다. */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
