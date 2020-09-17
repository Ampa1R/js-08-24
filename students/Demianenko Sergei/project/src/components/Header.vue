<template>
    <header>
        <div v-if="isBasketVisible" class="basket">
            <slot \>
        </div>
        <div class="searchText">
            <slot \>    
        </div> 

        <button type="button" class="cart-button" @click="isBasketVisible = !isBasketVisible">Корзина</button>        
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        basket: Array,
    },
    data() {
        return {
            
        };
    },
    methods: {
        
    }
};
</script>

<style>
/* */
</style>