<template>
  <tr>
    <td>
      <input class="form-control" id="percent" type="text" min="0" max="100" v-model="percent">
    </td>
    <td>
      <input class="form-control" type="text" id="sharePrice" v-model="share">
    </td>
    <td>
      <input class="form-control" type="text" id="invested" v-model="invested">
    </td>
    <td>
      <input class="form-control" type="text" id="numShareBuy" v-model="numShareBuy" disabled>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      invested: "",
      share: "",
      percent: ""
    };
  },
  computed: {
    slice() {
      return parseFloat(this.investable) * (this.percent / 100);
    },
    numShareBuy() {
      return (this.slice - this.invested) / this.share;
    }
  },
  props: {
    investable: String
  }
};
</script>
