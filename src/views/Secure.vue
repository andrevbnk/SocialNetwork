<template>
<div class="secure">
  <h1 @click="axios_test">Secure (тестирование общих/приватных запросов)</h1>
  <h6>Если открыть консоль разраб. и кликнуть по Secure посылается два запроса, один доступен всем, для другого нужнен валидный JWT </h6>
</div>
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