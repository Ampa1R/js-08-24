<template>
  <div id="app"> 
    <Header :product="product" :basket="basket" @change-search="hendleSearch" /> 
    <Main :product="product" :basket="basket"  :getFilter="getFilter" />
  </div>
</template> 

<script> 
import Header from "./components/Header.vue";    
import Main from "./components/Main.vue";   
import { promisifiedXHR, root } from "../js/file.js";   

export default {
  components: {
    Header, 
    Main,
  },

  data() {
    return {
      product: {
        goods: [], 
        serchProduct: '',
        notFound: {
          title: "Нам жаль",
          text: "Товар не найден",
        },
      },

      basket: {
        basketItems: [],
      },
    };
  },

  created() {
    this.getGoods();
  },

  computed: {
    getFilter() {
      const self = this.product;
      const reg = new RegExp(self.serchProduct, "i");
      console.log(self.goods);
      return self.goods.filter((item) => reg.test(item.name));
    },
  },

  methods: {
    getGoods() {
      //Вызываем нашу функцию, которая вернет промис и отдаст запрос с сервера.
      promisifiedXHR("GET", root, "/goods.json").then((goods) => {
        //Полученные данные храним в  this
        const self = this.product;
        self.goods = goods;   
      });
    },  

    hendleSearch(value){  
      this.product.serchProduct = value; 
      console.log(value);

    }, 
  },
};
</script> 
