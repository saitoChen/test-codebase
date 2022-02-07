<template>
  <page-header-wrapper>
    <div class="rebate-flex-wrapper">
      <a-row>
        <a-col :span="12">
          <ProductTable />
        </a-col>
        <a-col :span="12">
          <AmountInput />
        </a-col>
      </a-row>
    </div>
  </page-header-wrapper>
</template>
<script>
import ProductTable from './components/product-table.vue'
import AmountInput from './components/amount-input.vue'
export default {
  components: {
    ProductTable,
    AmountInput
  }
}
</script>
<style></style>
