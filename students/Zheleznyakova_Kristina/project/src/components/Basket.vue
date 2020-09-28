<template>
    <div v-if=isVisibleCart>
        <table class="table-basket" v-if='goods_basket.length > 0'>
            <tr>
                <td></td>
                <td>Name</td>
                <td>Amount</td>
                <td>Price</td>
                <td></td>
            </tr>
            <tr v-for='good in goods_basket' :key="good.id_product">
                <td></td>
                <td>{{ good.product_name }}</td>
                <td>{{ good.quantity }}</td>
                <td>{{ good.price }}</td>
                <td><button type="button" @click="$emit('remove-item', good)">Delete</button></td>
            </tr>
            <tr>
                <td>Итого</td>
                <td></td>
                <td></td>
                <td>{{ total }}</td>
                <td></td>                
            </tr>
        </table>
        <table class="table-basket" v-else>
            <tr>
                <td>Нет товаров в корзине</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Basket',
  props: ['goods_basket', 'isVisibleCart', 'total'],
}

</script>

<style scoped>
.table-basket {
    position: absolute;
    right: 5%;
    top: 10%;
    padding: 10px;
    outline: 2px solid gray;
    background-color: white;
}

td {
    padding: 10px;
    text-align: center;
}
</style>