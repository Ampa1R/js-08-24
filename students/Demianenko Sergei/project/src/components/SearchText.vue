<template>  
    <div class="searchText">
        <input type="text" class="search" v-model="searchText" />
    </div>
</template>

<script>
export default {
    name: 'SearchText',
    props: {
        basket: Array,
    },
    data() {
        return {
            searchText: '',
        };
    },
    methods: {
        filteredGoods() {
      const regexp = new RegExp(this.searchText, 'i');
      return this.goods.filter(item => regexp.test(item.product_name));
    }
    }
};
</script>

<style>
/* */
</style>