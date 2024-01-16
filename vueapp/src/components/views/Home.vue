<template>
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "사이트 모음",
      content: "다양한 사이트를 한 곳에 모아두었습니다."
    };
  }
};
</script>
