<template>
  <main>
    <div class="goods-list">
      <div class="goods-item" v-for="good in goods" :key='good.id_product'>
        <h3>{{ good.product_name }}</h3>
        <p>{{ good.price }}</p>
        <button class='btn_toBasket' type="button" @click="$emit('add-good', good)">Buy</button>
      </div>
    </div>
  </main>
</template>


<script>

export default {
  name: 'GoodsList',
  props: ['goods'],
}
</script>

<style scoped>
  .goods-list {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
  }

    .goods-item {
      display: inline-block;
      padding: 50px;
      margin: 20px;
      border: 2px solid gray;
      border-radius: 15px;
      text-align: center;
  }

  .goods-item h3 {
      padding-bottom: 20px;
  }

  .btn_toBasket {
    background-color: rgb(99, 199, 124);
    text-align: center;
    margin: 20px 0 0 0;
    padding: 10px 30px;
    border-radius: 25px;
    border: 1px solid gray;
    color: rgb(26, 26, 26);
  }
</style>