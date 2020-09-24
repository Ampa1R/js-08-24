<template>
    <main >
        <div v-if="apiError">
        Error Error Error Error Error Error Error Error Error Error Error Error Error Error
        </div>
        <div v-if="goods.length && !apiError" class="goods-list">
            <div class="goods-item" v-for="item in goods" v-bind:key="item.id_product">
                <h3>{{ item.product_name }}</h3>
                <p>{{ item.price }}</p>
                <button @click='$emit("add-basket", item)'>Buy</button>
            </div>
        </div>
        <div v-else class="goods-list__empty">Нет данных</div>
    </main>
</template>

<script>
export default {
    name: 'GoodsList',
    props: {
        goods: Array,
        apiError: Boolean,
    },
}
</script>

<style>
/* */
</style>
