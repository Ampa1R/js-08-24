<template>
    <header>
        <slot />
        <button type="button" class="cart-button" @click='$emit("basket-click")'>Корзина</button>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style>
/* */
</style>
