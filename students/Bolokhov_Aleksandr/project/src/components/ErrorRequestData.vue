<template>
<footer>  
<h1 v-if="errorText">{{textError}}</h1>
</footer>    
</template>

<script>
export default {
    name: "ErrorRequestData",
    props: ['errorText'],
    data() {
        return {
            textError: "Что-то пошло не так!",
        };
    },   
}

</script>

<style>
/* */
</style>