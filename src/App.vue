<template>
  <div>
    <router-link to="/">Меню</router-link>
    <router-link to="game">Игра</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="scss"></style>