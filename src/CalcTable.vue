<template>
  <div>
    <div v-if="items.length === 0">Calculated assets will show here.</div>
    <table v-else class="u-full-width">
      <thead>
        <tr>
          <th></th>
          <th>%Allocation</th>
          <th>$Share</th>
          <th>$Invested</th>
          <th>#Shares</th>
        </tr>
      </thead>
      <tbody>
        <calc-row
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :asset="item.asset"
          :investable="investable"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import CalcRow from "./CalcRow.vue";

export default {
  data() {
    return {
      items: []
    };
  },
  props: {
    investable: String
  },
  components: {
    CalcRow
  },
  methods: {
    addItem(asset) {
      this.items.push({
        id: (
          Date.now().toString(36) +
          Math.random()
            .toString(36)
            .substr(2, 5)
        ).toUpperCase(),
        asset
      });
    }
  },
  created() {
    this.$eventHub.$on("valid-asset-submit", this.addItem);
  }
};
</script>

