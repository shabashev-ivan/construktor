<template>
  <div class="block">
    <div
      @click="selectBlock"
      v-html="blockTemplate.template(block.values)"
      class="block__content">
    </div>
    <router-link
      :to="{ name: 'AddNewBlock', params: { pageID: $route.params.pageID, blockIndex: block.index + 1} }"
      class="block__button_addBlock">+</router-link>
  </div>
</template>

<script>
  export default {
    name: "block",
    props: {
      blockTemplate: {
        type: Object,
        required: true,
      },
      block: {
        type: Object,
      }
    },
    methods: {
      selectBlock() {
        this.$emit('selectBlock', this.block);
      },
      addBlock() {
        this.$emit('addBlock', this.block);
      }
    },
  }
</script>

<style scoped>
  .block {
    position: relative;
    cursor: pointer;
  }

  .block-selected, .block:hover {
    border: 2px solid blue;
  }

  .block__button_addBlock {
    width: 25px;
    height: 25px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid orange;
    font-size: 25px;
    line-height: 21px;
    text-align: center;
    bottom: -12.5px;
    overflow: hidden;
    left: calc(50% - 12.5px);
    background-color: #fff;
    display: none;
    color: #2c3e50;
  }

  .block-selected .block__button_addBlock,
  .block:hover .block__button_addBlock {
    display: block;
  }
</style>
