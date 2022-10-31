<template>
  <h2>Global Space</h2>
  <div>
    <h3>{{ message }}</h3>
    <p>{{ cartItems }}: Length -> {{ cartItems.length }}</p>
    <button v-on:click="increment">counter</button>
    :　{{count}}
  </div>
  <div>
    <button v-on:click="decrement">counter</button>
    :　{{$store.state.count}}
  </div>
</template>


<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { computed }  from 'vue'

export default {
  setup() {
    const store = useStore()
      // Composition API における mapStateの代替記述(1)
    const message = computed(() => store.state.message)
    const count = computed(() => store.state.count)
    const cartItems = computed(() => store.state.cartItems)
    return {
      // Composition API における mapStateの代替記述(2)
      message,
      count,
      cartItems,
      increment: () => {
        store.commit('increment',3)
      },
      decrement: () => {
        store.commit('decrement',2)
      }
    }
  }
}



</script>


<style>

</style>