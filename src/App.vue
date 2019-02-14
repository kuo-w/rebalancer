<template>
  <div class="container">
    <h1>Re:balancer</h1>
    <div>
      <h4>Investable</h4>
      <div class="row">
        <div class="column column-40">
          <v-input pre="$" v-model="investable" aria-label="Investable $ Amount"></v-input>
        </div>
      </div>
      <transition name="slide-fade">
        <asset-row v-if="investable"></asset-row>
      </transition>
    </div>
    <transition name="slide-fade">
      <calc-table v-if="investable" :investable="investable"/>
    </transition>
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
</style>
