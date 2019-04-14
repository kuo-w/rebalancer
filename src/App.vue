<template>
  <div class="container">
    <h1>Re:balancer</h1>
    <div>
      <h4>Current Asset Total</h4>
      <div class="row">
        <div class="column column-40">
          <v-input
            pre="$"
            :error="$v.investable.$error"
            v-model.trim="$v.investable.$model"
            aria-label="Investable $ Amount"
          ></v-input>
          <div class="error" v-if="$v.investable.$error">Numbers only</div>
        </div>
      </div>
      <transition name="slide-fade">
        <asset-row v-if="!$v.investable.$invalid"></asset-row>
      </transition>
    </div>
    <transition name="slide-fade">
      <calc-table v-if="!$v.investable.$invalid" :investable="investable"/>
    </transition>
  </div>
</template>

<script>
import { required, decimal, minValue } from "vuelidate/lib/validators";

import VInput from "./VInput.vue";
import AssetRow from "./AssetRow.vue";
import CalcTable from "./CalcTable.vue";

export default {
  data() {
    return {
      investable: ""
    };
  },
  components: {
    VInput,
    CalcTable,
    AssetRow
  },
  validations: {
    investable: {
      required,
      decimal,
      minValue: minValue(0)
    }
  },
  computed: {
    valueErrors() {
      return this.$v.investable.$error;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 10em;
}
</style>
