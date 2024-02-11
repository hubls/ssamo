<template>
  <div class="row">
    <td-component
      v-for="(cellData, index) in rowData"
      :key="index"
      :cell-data="cellData"
      :cell-index="index"
      :row-index="rowIndex"></td-component>
  </div>
</template>

<script>
import TdComponent from './TdComponent.vue';

export default {
  components: {
    TdComponent
  },
  props: {
    rowData: Array,
    rowIndex: Number
  },
}
</script>

<style>


</style>
