<template>
  <div :class="{'overflow':overflow}">
    <transition name="slide-fade">
      <div
        v-show="items.length === 0 && help"
        class="help"
        :class="{'helpVisiblityNone': (items.length > 0 && !help)}"
      >Calculated assets will show here.</div>
    </transition>
    <transition
      name="slide-fade"
      @before-enter="toggleHelp"
      @after-enter="toggleOverflow"
      @before-leave="toggleOverflow"
      @after-leave="toggleHelp"
    >
      <table style="max-width:900px;" v-if="items.length > 0" class="u-full-width">
        <caption style="text-align:start;">Summary</caption>
        <thead>
          <tr>
            <th></th>
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
            @remove-asset="removeAsset"
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
      items: [],
      overflow: false,
      help: true
    };
  },
  props: {
    investable: String
  },
  components: {
    CalcRow
  },
  methods: {
    toggleOverflow() {
      this.overflow = !this.overflow;
    },
    toggleHelp() {
      this.help = !this.help;
    },
    removeAsset(id) {
      const index = this.items.findIndex(e => {
        return e.id == id;
      });
      this.$delete(this.items, index);
    },
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
<style>
.overflow {
  overflow-x: auto;
}

.help {
  display: block !important;
}

.helpVisiblityNone {
  visibility: hidden;
}
</style>


