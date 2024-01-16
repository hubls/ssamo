<template>
  <div class="container-fluid">
    <tr-component
      v-for="(row, rowIndex) in chunkedTableData"
      :key="rowIndex"
      :row-data="row"
      :row-index="rowIndex">
    </tr-component>
  </div>
</template>

<script>
import TrComponent from "./TrComponent";

export default {
  props: {
    tableData: Array,
  },
  computed: {
    // 데이터를 3개씩 묶는 함수
    chunkedTableData() {
      const chunkSize = 3; // 한 행에 보여줄 열 개수
      const chunkedData = [];

      for (let i = 0; i < this.tableData.length; i += chunkSize) {
        chunkedData.push(this.tableData.slice(i, i + chunkSize));
      }
      return chunkedData;
    },
  },

  components: {
    TrComponent
  }
}
</script>
