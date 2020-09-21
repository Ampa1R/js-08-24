<template>
  <input type="text" class="search" @input="$emit('change-search', $event.target.value)" :value="searchText"/>
</template>

<script>
export default {
    name: "Search",
    props: ['searchText'],
}
</script>

<style>
/* */
</style>