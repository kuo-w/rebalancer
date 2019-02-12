<template>
  <tr>
    <td>
      <div>{{asset.symbol}}</div>
    </td>
    <td>
      <div>{{asset.allocation}}</div>
    </td>
    <td>
      <div>{{asset.sharePrice}}</div>
    </td>
    <td>
      <div>{{asset.invested}}</div>
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
      return numShareBuy;
    }
  }
};
</script>
