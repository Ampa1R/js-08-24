<template>
  <div id="app">
    <Header @basket-click="handleBasketToggle">
      <Basket @remove-basket-item="removeFromBasket" :basket="basket" :isBasketVisible="isBasketVisible"/>
      <Search v-model="searchText" />
    </Header>
    <GoodsList @add-basket="addItemOnBasket" :goods="filteredGoods" :apiError="apiError" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Basket from './components/Basket.vue';
import Search from './components/search.vue';
import GoodsList from './components/GoodsList.vue';

const API = 'http://localhost:3000';

export default {
  name: 'App',
  components: {
    Header,
    Search,
    GoodsList,
    Basket,
  },
  data() {
    return {
      goods: [],
      basket: [],
      apiError: false,
      isBasketVisible: false,
      searchText: '',
    };
  },
  created() {
    this.fetchGoods();
    this.syncForBasket();
  },

  computed: {
    filteredGoods() {
      const regexp = new RegExp(this.searchText, 'i');
      return this.goods.filter(item => regexp.test(item.product_name));
    },
    total() {
      return this.goods.reduce((acc, cur) => acc + cur.price, 0);
      },
    },
  
  methods: {
    fetchGoods() {
      return new Promise((resolve, reject) => {
        fetch(`${API}/catalog`)
          .then((res) => {
            
            return res.json(); //! Что за метод?????
          })
          .then((goods) => {
            this.goods = goods;
            resolve();
          })
          .catch((err) => {
            this.apiError = true;
            reject(err);
          });
      });
    },
    addItemOnBasket(item) {
        fetch(`${API}/basket`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(item),
        })
        .then(() => {
          this.syncForBasket();
        })
        .catch((err) => {
          console.log(err);
        });
      },

      syncForBasket() {
        fetch(`${API}/basket`)
        .then((res) => {
          return res.json();
        })
        .then((basketItems) => {
            this.basket = basketItems;
          })
          .catch((err) => {
            this.apiError = true;
            console.log(err);
          });
      },
//     makePOSTRequest (url, data, callback) {
// //99999999999999
//     },
    removeFromBasket(id) {
      fetch(`${API}/basket`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify([id]),
        })
        .then(() => {
          this.syncForBasket();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleBasketToggle() {
      this.isBasketVisible = !this.isBasketVisible;
    },
  },
}
</script>

<style>
*, *::after, *::before {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f9fafc;
}

header {
    display: flex;
    flex-direction: row-reverse;
    background: #fff;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,.2);
}

.cart-button {
    border: none;
    border-radius: 20px;
    padding: 7px 20px;
    background: #0b5bb8;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    color: #fff;
}

.cart-button:focus {
    outline: none;
    background: #0c50a0;
}

.cart-button:hover {
    background: #3b7eb9;
}

.goods-list {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.goods-item {
    box-shadow: 0 3px 6px rgba(0,0,0,.2);
    flex-basis: calc(25% - 40px);
    margin: 20px;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
}

.basket {
    background: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,.2);
    padding: 10px;
    position: absolute;
    top: 70px;
    width: 300px;
    border-radius: 10px;
}

</style>
