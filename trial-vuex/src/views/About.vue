<template>
  <h2>{{ state.message }}</h2>
</template>


<script setup>
import { ref,reactive } from 'vue';
import { defineProps } from 'vue';

const message = ref('');
const state = reactive({
  message: 'the message in the vue-file'
});

</script>


<style>

</style>