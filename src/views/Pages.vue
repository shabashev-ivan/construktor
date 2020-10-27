<template>
  <div class="sites-list">
    <router-link :to="{ name: 'PageEditor', params: { pageID: page.id } }" v-for="page in getAllPages" :key="page.id" class="site_item">
      <img class="site_item-image" :src="page.previewImg" alt="site pictures">
      <h3 class="site_item-name">{{ page.title }}</h3>
    </router-link>
    <div class="site_item" @click="addNewPage">
      <img class="site_item-image" src="https://www.flaticon.com/svg/static/icons/svg/32/32360.svg" alt="Добавить сайт">
      <h3 class="site_item-name">Добавить страницу</h3>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'Pages',
    computed: {
      ...mapGetters(['getAllPages']),
    },
    methods: {
      ...mapActions(['fetchAllPages', 'fetchCreateNewPage']),
      async addNewPage() {
        const newPage = await this.fetchCreateNewPage();
        this.$router.push({ name: 'PageEditor', params: {pageID: newPage.id} });
      },
    },
    mounted() {
      if (!this.getAllPages.length) this.fetchAllPages();
    },
  }
</script>

<style scoped>
  .sites-list {
    display: grid;
    margin: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  .site_item {
    height: 280px;
    border-radius: 8px;
    box-shadow: 2px 3px 9px 1px rgba(0, 0, 0, 0.23);
    overflow: hidden;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;
  }
  .site_item:hover {
    box-shadow: 2px 3px 9px 1px rgba(0, 0, 0, 0.33);
  }
  .site_item-image {
    display: block;
    width: 100%;
    height: 80%;
  }
  .site_item-name {
    color: #2c3e50;
    text-align: center;
  }
</style>
