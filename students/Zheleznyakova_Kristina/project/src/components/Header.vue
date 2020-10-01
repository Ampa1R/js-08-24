<template>
    <header>
      <slot />
      <button class="cart-button" type="button" @click="$emit('show-basket')">Basket</button>
    </header>
</template>

<script>
 
export default {
  name: 'Header',
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 65px;
        padding: 0;
        background-color: rgba(222, 222, 222, 0.21);
        display: inline-flex;
        justify-content: flex-end;
    }

    .cart-button {
        background-color: rgb(13, 109, 193);
        margin: 10px;
        padding: 13px;
        border-radius: 18px;
        color: white;
    }

    .cart-button:hover {
        background-color: rgb(124, 163, 197);
    }

    .cart-button:focus {
        outline: none;
    }
</style>