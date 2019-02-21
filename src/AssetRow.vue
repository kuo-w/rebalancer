<template>
  <form @submit.prevent="handleSubmit">
    <fieldset class="row">
      <div class="column column-10">
        <label for="symbol">Symbol</label>
        <input
          :class="{'field--error': $v.asset.symbol.$error}"
          @blur="blurSymbol"
          name="symbol"
          v-model.trim="$v.asset.symbol.$model"
          type="text"
        >
      </div>
      <div class="column column-20">
        <label for="allocation">%Allocation</label>
        <input
          :class="{'field--error': $v.asset.allocation.$error}"
          name="allocation"
          v-model="$v.asset.allocation.$model"
          type="text"
        >
      </div>
      <div class="column column-25">
        <label for="invested">$Invested</label>
        <input
          :class="{'field--error': $v.asset.invested.$error}"
          name="invested"
          v-model="$v.asset.invested.$model"
          type="text"
        >
      </div>
      <div class="column column-20">
        <label for="sharePrice">$Share</label>
        <input
          :class="{'field--error': $v.asset.sharePrice.$error}"
          name="sharePrice"
          v-model="$v.asset.sharePrice.$model"
          type="text"
        >
      </div>
      <div class="column column-20 column--submit">
        <input type="submit" value="Ok">
      </div>
    </fieldset>
    <ul>
      <li class="error" v-if="$v.asset.symbol.$error">Symbol should be letters only.</li>
      <li class="error" v-if="valueErrors">Values greater than 0 only.</li>
      <li class="error" v-if="submitStatus == 'ERROR'">There are errors.</li>
    </ul>
  </form>
</template>

<script>
import { required, decimal, minValue } from "vuelidate/lib/validators";
import { AlphaVantageApi } from "./AlphaVantageApi.js";

const symbol = symbol => /^[a-zA-Z.]+$/.test(symbol);

function initialAssetData() {
  return {
    asset: {
      symbol: "",
      allocation: "",
      sharePrice: "",
      invested: ""
    },
    submitStatus: ""
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
        symbol
      },
      allocation: {
        required,
        decimal,
        minValue: minValue(0)
      },
      sharePrice: {
        required,
        decimal,
        minValue: minValue(0)
      },
      invested: {
        required,
        decimal,
        minValue: minValue(0)
      }
    }
  },
  computed: {
    valueErrors() {
      return (
        this.$v.asset.allocation.$error ||
        this.$v.asset.sharePrice.$error ||
        this.$v.asset.invested.$error
      );
    }
  },
  methods: {
    async blurSymbol() {
      const { symbol, price } = await new AlphaVantageApi(
        this.asset.symbol
      ).getSymbolPrice();
      if (this.asset.symbol == symbol) {
        this.asset.sharePrice = price;
      }
    },
    handleSubmit() {
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        return;
      }
      this.$eventHub.$emit("valid-asset-submit", this.asset);
      this.$v.$reset();
      Object.assign(this.$data, initialAssetData());
    }
  }
};
</script>


<style lang="scss" scoped>
.field--error {
  border: 1px #f79483 solid !important;
}

.column--submit {
  margin-top: auto;
}

fieldset {
  margin-bottom: 0.5rem;
}
</style>
