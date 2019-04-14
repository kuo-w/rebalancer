<template>
  <input
    @input="$emit('input', $event.target.value)"
    :value="value"
    :aria-label="ariaLabel"
    :placeholder="placeholder"
    :class="{'field--error': error}"
    class="form-control"
    type="text"
  >
</template>

<script>
export default {
  props: {
    pre: String,
    post: String,
    value: String,
    placeholder: String,
    ariaLabel: String,
    error: Boolean
  }
};
</script>

