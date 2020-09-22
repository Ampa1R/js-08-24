<template>
  <div id="app">
    <Header v-on:show-basket="showBasket">
      <Search v-on:filter-goods="filterGoods" />
      <Basket :goods_basket='goods_basket' :isVisibleCart='isVisibleCart' :total="total" v-on:remove-item="remove_item" />
    </Header>    
    <GoodsList :goods="filteredGoods" v-on:add-good="addItemBasket" />
    <Error v-if='isError' :error="isError" />
  </div>
</template>

<script>

import GoodsList from './components/GoodsList.vue';
import Header    from './components/Header.vue';
import Search    from './components/Search.vue';
import Basket    from './components/Basket.vue';
import Error     from './components/Error.vue';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

export default {
  name: 'App',
  components: {
    GoodsList,
    Header,
    Search,
    Basket,
    Error,
  },
  data() {
    return {
      goods: [],
      goods_basket: [],
      filteredGoods: [], 
      isVisibleCart: false, 
      isError: '',
    }
  },
  created() {
    this.fetchGoods();
  },
  computed: {
    total() 
    {
      return this.goods_basket.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    },
  },
  methods: {
    fetchGoods() 
    {
      fetch(`${API_URL}/catalogData.json`)
        .then((response) => response.json())
        .then((data) => 
        {
          this.goods         = data;
          this.filteredGoods = data;
        })
        .catch(err => 
        {
          console.log("Ошибка: " + err);

          this.isError = err;
        })   
    },
    filterGoods(searchLine)
    {
      const regexp              = new RegExp(searchLine, 'i');

      return this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
    }, 
    showBasket() 
    {
      return this.isVisibleCart = !this.isVisibleCart;      
    },
    addItemBasket(item)
    {
      const itemIndex = this.goods_basket.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
        
      if (itemIndex !== -1) this.goods_basket[itemIndex].quantity++;
      else this.goods_basket.push({ ...item, quantity: 1 });
    },
    get_basket_items()
    {
      return this.goods_basket;
    },   
    remove_item(item) 
    {    
      const itemIndex = this.goods_basket.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
        
      if (itemIndex !== -1) 
      {
        if (item.quantity > 1) item.quantity--
        else this.goods_basket.splice(itemIndex, 1);
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    margin: 0;
    padding: 0;
}
</style>
