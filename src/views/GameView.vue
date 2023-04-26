<template>
  <div class="game-view">
    <div class="game-view__controls">
      <GControls />
    </div>
    <div class="game-view__result">
      <!-- <img src="room-1.jpg" /> -->
      <div class="game-view__canvas">
        <GResult />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GControls from '@/components/game/GControls.vue'
import GResult from '@/components/game/GResult.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { GResult, GControls },
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.game-view {
  display: flex;
  position: relative;

  &__result {
    position: relative;

    // img {
    //   position: absolute;
    //   height: 1084px;
    // }
  }

  &__canvas {
    position: absolute;
    bottom: 0;
  }
}
</style>
