<template>
    <input
      class="form-control"
      :aria-label="ariaLabel"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    >
</template>

<script>
export default {
  props: {
    pre: String,
    post: String,
    value: String,
    placeholder: String,
    ariaLabel: String
  }
};
</script>

