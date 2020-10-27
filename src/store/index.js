import Vue from 'vue'
import Vuex from 'vuex'
import fakeData from "./fakeData";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [],
    blockTemplates: [],
  },
  getters: {
    getAllPages: (state) => state.pages,
    getAllBlockTemplates: (state) => state.blockTemplates,
    getTemplateByID: (state) => (templateID) => state.blockTemplates.find(template => template.id === templateID),
    getPageByID: (state) => (pageID) => state.pages.find(page => page.id === pageID),
  },
  mutations: {
    setPages(state, pages) {
      state.pages.splice(0, state.pages.length);
      state.pages.push(...pages);
    },
    setBlockTemplates(state, blockTemplates) {
      state.blockTemplates.splice(0, state.blockTemplates.length);
      state.blockTemplates.push(...blockTemplates);
    },
    setPageSettings(state, { pageID, title, previewImg }) {
      const pageForUpdate = state.pages.find(page => page.id === pageID);
      pageForUpdate.title = title;
      pageForUpdate.previewImg = previewImg;
    },
    addPage(state, page) {
      state.pages.push(page);
    },
    updatePageBlocks(state, { pageID, blocks }) {
      state.pages.find(page => page.id === pageID).blocks = blocks;
    },
    addBlock(state, { pageID, blockTemplateID, blockIndex }) {
      const blocks = state.pages.find(page => page.id === pageID).blocks;
      blocks.forEach(block => {
        if (block.index >= blockIndex) block.index++;
      });
      const values = {};
      const defaultValues = fakeData.blockTemplates.find(blockTemplate => blockTemplate.id == blockTemplateID).defaultValues;
      for (let key in defaultValues) {
        values[key] = defaultValues[key].value;
      }
      const newBlock = {
        id: +new Date(),
        index: blockIndex,
        blockTemplateID: blockTemplateID,
        values: values,
      };
      newBlock.index = blockIndex;
      blocks.push(newBlock);
    },
  },
  actions: {
    fetchCreateNewPage({ commit }, name='Новая Страница') {
      const dataFromBackend = JSON.parse(JSON.stringify(fakeData.newPage));
      dataFromBackend.title = name;
      dataFromBackend.id = +new Date();
      dataFromBackend.blocks[0].id = +new Date();
      commit('addPage', dataFromBackend);
      return dataFromBackend;
    },
    fetchAllPages({ commit }) {
      const dataFromBackend = fakeData.allPages; // Данные которые должны были придти с бекенда
      commit('setPages', dataFromBackend);
    },
    fetchAllBlockTemplates({ commit }) { // Описание всех шаблонов блоков
      const dataFromBackend = fakeData.blockTemplates; // Данные которые должны были придти с бекенда
      commit('setBlockTemplates', dataFromBackend);
    },
    fetchPageSettings({ commit }, { pageID, title, previewImg }) {
      //имитация отсылания данных на бекенд
      commit('setPageSettings', { pageID, title, previewImg });
    },
    fetchUpdatePageBlocks({ commit }, { pageID, blocks }) {
      commit('updatePageBlocks', { pageID, blocks });
    },
    fetchCreateNewBlock({ commit }, { pageID, blockTemplateID, blockIndex }) {
      commit('addBlock', { pageID, blockTemplateID, blockIndex });
    }
  },
})
