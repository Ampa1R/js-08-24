<template>
    <div>
      <input type="text" class="search" v-model='searchLine'>
      <button class="search-button" type="button" @click="$emit('filter-goods', searchLine)">Search</button>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
        searchLine: '',
    }
  },
}
</script>

<style>
    .search {
        height: 30px;
        align-self: center;
    }

    .search-button {
        background-color: rgb(13, 109, 193);
        margin: 10px;
        padding: 13px;
        border-radius: 18px;
        color: white;
    }

    .search-button {
        background-color: rgb(90, 89, 175);
    }

    .search-button:hover {
        background-color: rgb(116, 115, 180);
    }
</style>