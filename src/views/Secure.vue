<template>
  <h1 @click="axios_test">SEcure</h1>
</template>

<script>
import axios from 'axios';
export default {
    methods: {
        async axios_test(){
            const all = await axios.get('/test/all');
            console.log(all);
            const priv = await axios.get('/test/user');
            console.log(priv);
        }
    },
}
</script>

<style>

</style>