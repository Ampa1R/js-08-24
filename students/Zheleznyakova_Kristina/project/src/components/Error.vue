<template>
    <div class="error">
      <p>Произошла ошибка {{ error }}</p>
    </div>
</template>

<script>
 
export default {
  name: 'Error',
  props: {
    error: String,
  },
}
</script>

<style scoped>
    .error {
        position: relative;
        margin: 0;
    }
    p {
        color: black;
        font-size: 24px;
    }
</style>