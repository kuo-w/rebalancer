<template>
  <div class="input-group mb-3">
    <div v-if="pre" class="input-group-prepend">
      <span class="input-group-text">{{ pre }}</span>
    </div>
    <input
      :id="id"
      class="form-control"
      :aria-label="ariaLabel"
      type="text"
      v-model="inputVal"
      :placeholder="placeholder"
    >
    <div v-if="post" class="input-group-append">
      <span class="input-group-text">{{post}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pre: String,
    post: String,
    value: String
  },
  data() {
    return { inputVal: this.value };
  },
  inputVal(val) {
    this.$emit("input", val);
  }
};
</script>

