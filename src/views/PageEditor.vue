<template>
  <div class="editor">
    <div class="editor__menu">
      <div class="editor__menu_buttons">
        <router-link :to="{ name: 'PagesList' }" class="editor__menu_buttons_button">
          Закрыть
        </router-link>
        <div
          @click="savePage"
          class="editor__menu_buttons_button editor__menu_buttons_button-save">
          Сохранить
        </div>
      </div>
      <div class="editor__menu_pageSettings">
        <inputText
          :value.sync="pageTitle"
          class="editor__menu_input"
          labelText="Название страницы: " />
        <inputText
          :value.sync="pageImageURL"
          class="editor__menu_input"
          labelText="URL превью страницы: " />
      </div>
      <div
        v-if="activeBlock"
        class="editor__menu_blockSettings">
        <h2 class="editor__menu_blockSettings_title">{{activeBlockTemplate.title}}</h2>
        <inputText
          class="editor__menu_input"
          v-for="(valueObject, key) in activeBlockTemplate.defaultValues"
          :value.sync="activeBlock.values[key]"
          :labelText="valueObject.label"
          :key="`input_${key}`"
        />
      </div>
    </div>
    <div class="editor__content">
      <block
        :key="`block_id${block.id}`"
        :blockTemplate="getTemplateByID(block.blockTemplateID)"
        :block="block"
        :class="{'block-selected': block.id === activeBlockID}"
        @selectBlock="selectBlock"
        v-for="block in pageData.blocks" />
    </div>
  </div>
</template>

<script>
  import inputText from "@/components/inputs/inputText";
  import block from "@/components/pageEditor/block";
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "PageEditor",
    components: {
      inputText,
      block,
    },
    data() {
      return {
        pageID: +this.$route.params.pageID,
        pageData: { blocks: [] },
        activeBlockValues: null,
        pageTitle: '',
        pageImageURL: '',
        activeBlockID: 0,
      };
    },
    computed: {
      ...mapGetters(['getAllPages', 'getPageByID', 'getAllBlockTemplates', 'getTemplateByID']),
      activeBlock() {
        return this.pageData.blocks.find(block => block.id === this.activeBlockID);
      },
      activeBlockTemplate() {
        if (this.activeBlock) return this.getTemplateByID(this.activeBlock.blockTemplateID);
        return null;
      },
    },
    methods: {
      ...mapActions(['fetchAllPages', 'fetchPageSettings', 'fetchAllBlockTemplates', 'fetchUpdatePageBlocks']),
      selectBlock(block) {
        this.activeBlockID = block.id;
      },
      async savePage() {
        if (this.pageTitle !== this.pageData.title || this.pageImageURL !== this.pageData.previewImg) {
          await this.fetchPageSettings({ pageID: this.pageData.id, title: this.pageTitle, previewImg: this.pageImageURL });
        }
        await this.fetchUpdatePageBlocks({pageID: this.pageID, blocks: this.pageData.blocks});
        alert('Данные сохранены!');
      }
    },
    async mounted() {
      if (!this.getAllPages.length) await this.fetchAllPages(); //в реальности это была бы асинхронная операция
      this.pageData = JSON.parse(JSON.stringify(this.getPageByID(this.pageID)));
      this.pageData.blocks.sort((a, b) => a.index - b.index);
      this.pageTitle = this.pageData.title;
      this.pageImageURL = this.pageData.previewImg;
      this.activeBlockID = this.pageData.blocks[0].id;
      if (!this.getAllBlockTemplates.length) await this.fetchAllBlockTemplates();
    }
  }
</script>

<style scoped>
  .editor {
    display: flex;
  }

  .editor__menu {
    width: 400px;
    background-color: white;
    border: 2px solid darkolivegreen;
    flex-shrink: 0;
    min-height: calc(100vh - 50px); /* в реальном проекте продумал этот момент тщательнее, как минимум создал бы переменную с высотой навбара */
  }

  .editor__content {
    width: 100%;
  }

  .editor__menu_buttons {
    height: 50px;
    display: flex;
  }

  .editor__menu_buttons_button {
    height: 100%;
    text-decoration: none;
    line-height: 50px;
    font-size: 20px;
    color: #2c3e50;
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
    background-color: #ff855d;
    width: 100%;
  }

  .editor__menu_buttons_button-save {
    background-color: #8a5543;
  }

  .editor__menu_input {
    margin-top: 20px;
  }

  .editor__menu_blockSettings {
    border-top: 1px solid olivedrab;
    margin-top: 20px;
  }

  .editor__menu_blockSettings_title {
    text-align: center;
  }
</style>
