<template>
  <div class="app">
    <!-- <header> -->
      <!-- <router-link to="/">Главная страница</router-link> -->
    <!-- </header> -->
    <!-- <router-link to="game">Игра</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
body {
  margin: 0;
}

.app {
 background-image: linear-gradient(to bottom, #4636a3, #4f34a5, #5832a8, #6130a9, #6a2dab);
}
</style>
