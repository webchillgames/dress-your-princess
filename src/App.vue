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
  background-image: linear-gradient(to bottom, #31cceb, #63d8ef, #85e3f3, #a4eff9, #c0faff);
}
</style>
