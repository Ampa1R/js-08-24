<template>
  <section class="shop center-items">
    <div class="wrapper">
      <div class="shop__content">
        <h2 class="shop__title">Кофе любого вида.</h2>
        <span class="shop__max-price">Общая цена товаров на сумму: {{sum("count * price")}} Р</span>
        <div v-if="getFilter.length" class="shop__list list-row">
          <div class="shop__product product" v-for="item in getFilter" :key="item.id">
            <img class="product__img" :src="item.image" alt="Кофе" />
            <div class="product__group">
              <p class="product-description">{{item.name}}</p>
              <span class="product__price">{{item.price}} Р</span>
              <button @click="() => addElement(item)" class="product__btn btn">Заказать</button>
            </div>
          </div>
        </div>
        <div v-else class="shop__not-found">
          <div class="shop__404">
            <img class="shop__404-img" src="/image/404.jpg" alt="404" />
            <div class="shop__404-content product-404">
              <h2 class="product-404__title">{{product.notFound.title}}</h2>
              <p class="product-404__text">{{product.notFound.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 

<script>
import { getSumObj } from "../../js/file.js";
export default {
  props: ["getFilter", "product", "basket"],

  methods: { 
    addElement(basketItem) {
      const self = this.basket;
      const isItemBasket = self.basketItems.find(
        (item) => item.basketItem.id === basketItem.id
      );
      if (isItemBasket) {
        console.log("Элемент уже в корзине.");
        isItemBasket.count++;
      } else {
        self.basketItems.push({
          basketItem,
          count: 1,
        });
      }  
    },

    sum(express) {
      const self = this.product;
      return self.goods.reduce((all, cur) => all + getSumObj(cur, express), 0);
    },
  },
};
</script>