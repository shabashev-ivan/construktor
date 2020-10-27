<template>
  <div class="blockTemplates-list">
    <div
      @click="selectTemplate(blockTemplate.id)"
      v-for="blockTemplate in getAllBlockTemplates"
      :key="blockTemplate.id"
      class="blockTemplates-list__item">
      <img class="blockTemplates-list__item_img" src="https://habrastorage.org/getpro/moikrug/uploads/company/740/795/000/logo/medium_cdb37a30fac7d517928a34dfa455f0c7.png" alt="Block">
      <h3 class="blockTemplates-list__item_title">{{blockTemplate.title}}</h3>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  export default {
    name: "AddNewBlock",
    computed: {
      ...mapGetters(['getAllBlockTemplates']),
    },
    methods: {
      ...mapActions(['fetchAllBlockTemplates', 'fetchCreateNewBlock']),
      async selectTemplate(blockTemplateID) {
        await this.fetchCreateNewBlock({ pageID: +this.$route.params.pageID, blockTemplateID: blockTemplateID, blockIndex: this.$route.params.blockIndex });
        this.$router.push({ name: 'PageEditor', params: { pageID: +this.$route.params.pageID } });
      },
    },
    async mounted() {
      if (!this.getAllBlockTemplates.length) await this.fetchAllBlockTemplates();
    },
  }
</script>

<style scoped>
  .blockTemplates-list {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .blockTemplates-list__item {
    width: 300px;
    height: 200px;
    margin-right: 10px;
    cursor: pointer;
  }

  .blockTemplates-list__item_img {
    display: block;
    height: 100%;
    width: 100%;
    border: 1px solid gray;
    border-radius: 10px;
  }
</style>
