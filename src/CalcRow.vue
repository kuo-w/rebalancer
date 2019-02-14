<template>
  <tr>
    <td>
      <div style="width:30px;display:flex;justify-content:center;align-items:center;">
        <img @click="deleteRow" src="/assets/remove.svg" alt="Remove">
      </div>
    </td>
    <td>
      <div>
        <b>{{asset.symbol.toUpperCase()}}</b>
      </div>
    </td>
    <td>
      <div>{{parseFloat(asset.allocation).toFixed(2)}}</div>
    </td>
    <td>
      <div>{{parseFloat(asset.sharePrice).toFixed(2)}}</div>
    </td>
    <td>
      <div>{{parseFloat(asset.invested).toFixed(2)}}</div>
    </td>
    <td>
      <div>{{numShareBuy}}</div>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    investable: String,
    id: String,
    asset: Object
  },
  methods: {
    deleteRow() {
      this.$emit("remove-asset", this.id);
    }
  },
  computed: {
    slice() {
      return (
        parseFloat(this.investable) * (parseFloat(this.asset.allocation) / 100)
      );
    },
    numShareBuy() {
      const numShareBuy =
        (this.slice - parseFloat(this.asset.invested)) /
        parseFloat(this.asset.sharePrice);
      if (Number.isNaN(numShareBuy)) return "";
      return Math.floor(numShareBuy);
    }
  }
};
</script>
