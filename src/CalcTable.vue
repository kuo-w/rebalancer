<template>
  <div>
    <div v-if="items.length === 0">Calculated assets will show here.</div>
    <transition name="slide-fade">
      <table style="max-width:900px;" v-if="items.length > 0" class="u-full-width">
        <caption style="text-align:start;">Summary</caption>
        <thead>
          <tr>
            <th style="width:15%"></th>
            <th style="width:15%">%Allocation</th>
            <th style="width:20%">$Share</th>
            <th style="width:30%">$Invested</th>
            <th style="width:20%">#Shares</th>
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
    </transition>
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

