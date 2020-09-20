<template>
    <div  class="popup__basket shop">
            <div class="shop__popup">
              <div v-if="basket.basketItems.length !== 0" class="shop__product-basket product basket">
                <div class="basket__item" v-for="item in basket.basketItems" :key="item.id">
                  <span v-if="item.count < 5" class="product__price product__price_demonstrative">
                    {{item.basketItem.price}}
                    Р &rArr; X {{item.count}}
                  </span>

                  <span v-else class="product__price product__price_demonstrative">
                    {{item.basketItem.price}}
                    Р &rArr; X {{item.count = 5}}
                  </span>
                  <picture>
                    <source :srcset="item.basketItem.image" type="image/webp" />
                    <img class="basket__img" :src="item.basketItem.image" alt="Кофе" />
                  </picture>
                  <p class="basket__product-description">{{item.basketItem.name}}</p>
                  <button @click="$emit('remove', item)" class="basket__removeEl btn">&#10006;</button>
                </div>
              </div>
              <div class="shop__popup-result">
                <p class="basket__product-description basket__product-description_allocated">
                  Итог
                  {{333}} Р
                </p>
              </div>
            </div>
          </div>
</template> 

<script>
export default {
    props: ['basket'],
}
</script> 

<style >

</style>