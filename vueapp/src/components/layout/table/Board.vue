<template>
  <div>
    <table-component :tableData="tableData" />
  </div>
</template>

<script>
import TableComponent from "./TableComponent.vue";

export default {
  props: {
    tableData: Array,
  },
  components: {
    TableComponent,
  }
}

</script>
