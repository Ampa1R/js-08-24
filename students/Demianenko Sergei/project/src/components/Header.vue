<template>
    <header>
        <div v-if="isBasketVisible" class="basket">
            <slot name="basket"></slot>
        </div>
        <div class="searchText">
            <slot name="searchText"></slot>
        </div>    
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