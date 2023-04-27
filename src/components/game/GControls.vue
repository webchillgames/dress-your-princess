<template>
  <div class="g-controls">
    <button type="button" v-for="(v, i) in elements" :key="v.id" :value="v.id" >{{i}}{{ v.id }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.g-controls {
  display: flex;
  flex-direction: column;

  button {
    flex-shrink: 0;
    height: 80px;
    aspect-ratio: 1 / 1;
  }
}
</style>
