<template>
    <div>
      <input type="text" class="search" @input="$emit('input', $event.target.value)" >
    </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style scoped>
    .search {
        height: 30px;
        align-self: center;
        margin: 9% 0;
    }
</style>