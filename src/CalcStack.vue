<template>
  <div class="row">
    <div>% of investable =</div>
    <div>{{asset.investable}} * {{asset.percent/100}} = {{slice}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asset: {
        investable: "100",
        percent: "100"
      }
    };
  },
  computed: {
    slice() {
      return (
        parseFloat(this.asset.investable) *
        (parseFloat(this.asset.percent) / 100)
      );
    },
    numShareBuy() {
      const numShareBuy =
        (this.slice - parseFloat(this.invested)) / parseFloat(this.share);
      if (Number.isNaN(numShareBuy)) return "";
      return numShareBuy;
    }
  }
};
</script>

