<template>
  <h2>Local Space</h2>
  <div>
    <h3>{{ state.message }}</h3>
    <button v-on:click="increment(count)">counter</button>
    :　{{count}}
  </div>
  <div>
    <button v-on:click="decrement(count)">counter</button>
    :　{{count}}
  </div>
</template>


<script setup>
import { ref,reactive } from 'vue';

const state = reactive({
  message: 'the message in the vue-file'
});

const count = ref(0)
const increment = () => { // カウンタを1増やす
  count.value += 1
}
const decrement = () => { // カウンタを1減らす
  count.value -= 1
}

</script>


<style>
</style>