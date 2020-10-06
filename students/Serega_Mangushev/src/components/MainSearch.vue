<template>
    <input
      class="menu__search"
      type="text"
      placeholder="Я ищу..."
      @input="(e) => $emit('change-search', e.target.value)"
      :value="serchProduct"
    /> 
</template> 

<script>
export default {
  props: ["serchProduct"],
};
</script> 

<style>
</style>