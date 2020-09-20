<template>
  <main class="page">
    <Shop :getFilter="getFilter" :product="product" :basket="basket"/>
  </main>
</template> 

<script>
import Shop from "./Shop.vue";

export default {
  props: ['getFilter', 'product', "basket"],


  components: {
    Shop,
  },
};
</script>