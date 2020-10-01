<template>
  <div id="app">
    <Header v-on:show-basket="showBasket">
      <Search v-model="searchLine" />
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

const API_URL = 'http://localhost:3000';

export default {
  name: 'App',
  components: {
    GoodsList,
    Header,
    Search,
    Basket,
    Error,
  },
  data() 
  {
    return {
      goods: [],
      goods_basket: [],
      isVisibleCart: false, 
      isError: '',
      searchLine: '',
    }
  },
  created() 
  {
    this.fetchGoods();
    this.fetchBasket();
  },
  computed: {
    total() 
    {
      return this.goods_basket.reduce((acc, cur) => acc + cur.price, 0);
    },
    filteredGoods()
    {
      const regexp = new RegExp(this.searchLine, 'i');

      return this.goods.filter((item) => regexp.test(item.product_name));
    },
  },
  methods: {
    fetchGoods()
    {
      fetch(`${API_URL}/catalog`)
        .then((response) => response.json())
        .then((data) => this.goods = data)
        .catch(err => this.isError = err)   
    },
    fetchBasket()
    {
      fetch(`${API_URL}/cart`)
        .then((response) => response.json())
        .then((data) => this.goods_basket = data)
        .catch(err => this.isError = err)  
    },
    addItemBasket(item)
    {
      fetch(`${API_URL}/addToCart`, 
      {
        method: 'POST', 
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          const itemIndex = this.goods_basket.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
        
          if (itemIndex !== -1) this.goods_basket[itemIndex].quantity++;
          else this.goods_basket.push({ ...item, quantity: 1 });
        })
        .catch(err => this.isError = err)  
    },
    remove_item(item)
    {
      fetch(`${API_URL}/decreaseOrRemoveAmount`, 
      {
        method: 'POST', 
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          const itemIndex = this.goods_basket.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
        
          if (itemIndex !== -1) { 
            if (item.quantity > 1) this.goods_basket[itemIndex].quantity--;
            else this.goods_basket.splice(itemIndex, 1);
          }})
        .catch(err => this.isError = err)
    },
    showBasket() 
    {
      return this.isVisibleCart = !this.isVisibleCart;      
    },
  },
}
</script>

<style scoped>

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
