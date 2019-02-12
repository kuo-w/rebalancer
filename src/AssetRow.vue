<template>
  <form @submit.prevent="handleSubmit">
    <fieldset class="row">
      <div class="column column-10 form-group">
        <label for="symbol">Symbol</label>
        <input
          :class="{'error--input': $v.asset.symbol.$error}"
          name="symbol"
          v-model.trim="$v.asset.symbol.$model"
          type="text"
        >
      </div>
      <div class="column column-20">
        <label for="allocation">%Allocation</label>
        <input name="allocation" v-model="asset.allocation" type="text">
      </div>
      <div class="column column-20">
        <label for="sharePrice">$Share</label>
        <input name="sharePrice" v-model="asset.sharePrice" type="text">
      </div>
      <div class="column column-25">
        <label for="invested">$Invested</label>
        <input name="invested" v-model="asset.invested" type="text">
      </div>
      <div class="column column-20 column--submit">
        <input type="submit" value="Ok">
      </div>
    </fieldset>
    <div class="error" v-if="!$v.asset.symbol.alpha">Letters only.</div>
  </form>
</template>

<script>
import { required, alpha } from "vuelidate/lib/validators";

function initialAssetData() {
  return {
    asset: {
      symbol: "",
      allocation: "",
      sharePrice: "",
      invested: ""
    }
  };
}

export default {
  data() {
    return initialAssetData();
  },
  validations: {
    asset: {
      symbol: {
        required,
        alpha
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$eventHub.$emit("valid-asset-submit", this.asset);
      Object.assign(this.$data, initialAssetData());
    }
  }
};
</script>


<style lang="scss" scoped>
.column--submit {
  margin-top: auto;
}

fieldset {
  margin-bottom: 0.5rem;
}
</style>
