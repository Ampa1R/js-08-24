<template>
<body>
    <div class="error-block" v-if="text">
        <p class="error-msg">
    <button class="close-btn" @click="setText('')">&times;</button>
            {{text}}
        </p>
    </div>
</body>
    
</template>

<script>
export default {
    name: 'Error',
    props: {
        error: String,
    },
    data() {
        return {
             text: ''
        };
    },
    methods: {
        setText(value){
            this.text = value;
        }
    }
};
</script>

<style>
/* */
</style>