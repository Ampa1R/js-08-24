<template>
    <header>
        <div v-if="isBasketVisible" class="basket">
            <div class="basket__item" v-for="basketItem in basket" v-bind:key="basketItem.id_product">
                <h2>Ваша Корзина&colon;</h2>
                <h4>{{ basketItem.product_name }}</h4>
                <p>{{ basketItem.price }}</p>
                <button @click="removeFromBasket(basketItem.id_product)">Удалить</button>
            </div>
        </div>        
    </header>
</template>

<script>
export default {
    name: 'Basket',
    props: {
        basket: Array,
    },
    data() {
        return {
            isBasketVisible: false,
        };
    },
    methods: {
        cartQuantity() {  
      return this.carts.reduce((acc, cur) => acc + cur.quantity, 0);
    },
    cartSum() {      
    return this.carts.reduce((acc, cur) => acc + cur.price, 0);
    },
        removeFromBasket(id) {
      this.basket = this.basket.filter(({ id_product }) => id_product !== id);
    },
    }
};
</script>

<style>
/* */
</style>