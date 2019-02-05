<template>
  <div class="container-fluid">
    <h1>Current Allocation</h1>
    <div class="d-inline-flex w-100">
      <h4>Investible</h4>
      <v-input class="ml-3" pre="$" aria-label="Investable $ Amount"/>
    </div>
    <button class="btn btn-primary" @click="addItem">Add+</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">%Allocation</th>
          <th scope="col">$Share</th>
          <th scope="col">$Invested</th>
          <th scope="col">#Shares</th>
        </tr>
      </thead>
      <tbody>
        <item v-for="i in items" :key="i.id" :investable="investable" class="column"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import Item from "./item.vue";
import vInput from "./input.vue";

export default {
  name: "app",
  data() {
    return {
      investable: "",
      items: []
    };
  },
  components: {
    Item,
    vInput
  },
  methods: {
    addItem() {
      this.items.push({ id: Date.now().toString() });
    }
  },
  created() {
    this.addItem();
  }
};
</script>
