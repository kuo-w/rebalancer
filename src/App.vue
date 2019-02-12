<template>
  <div class="container">
    <h1>Re:balancer</h1>
    <div>
      <h4>Investable</h4>
      <v-input
        class="ml-3 investable"
        pre="$"
        v-model="investable"
        aria-label="Investable $ Amount"
      ></v-input>
      <asset-row></asset-row>
    </div>
    <calc-table :investable="investable"/>
  </div>
</template>

<script>
import VInput from "./VInput.vue";
import AssetRow from "./AssetRow.vue";
import CalcTable from "./CalcTable.vue";

export default {
  components: {
    VInput,
    CalcTable,
    AssetRow
  },
  data() {
    return {
      investable: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 10em;
}
.investable {
  width: 300px;
}
</style>
