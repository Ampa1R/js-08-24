<template>
        <div v-if="isBasketVisible" class="basket">
            <div class="basket__item" v-for="basketItem in basket" v-bind:key="basketItem.id_product">
                <h4>{{ basketItem.product_name }}</h4>
                <p>{{ basketItem.price }}</p>
                <button @click="removeFromBasket(basketItem.id_product)">Удалить</button>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Basket',
    props: {
        isBasketVisible: Boolean,
        basket: Array,
    },
    
    methods: {
        removeFromBasket(id) {
            console.log('remove from basket', id);
        }
    }
};
</script>

<style>
/* */
</style>
