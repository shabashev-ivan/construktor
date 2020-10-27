<template>
  <div class="input">
    <label class="input__label">
      {{ labelText }}
      <input type="text" v-model="localValue">
    </label>
  </div>
</template>

<script>
  export default {
    name: "inputText",
    props: {
      labelText: {
        type: String,
        required: false,
      },
      value: {
        type: String,
        required: true,
      }
    },
    computed: {
      localValue: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('update:value', newValue);
        },
      }
    }
  }
</script>

<style scoped>

</style>
