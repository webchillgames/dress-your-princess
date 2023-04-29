<template>
  <div class="game-view">
    <div class="game-view__result">
      <GResult />
    </div>

    <!-- <GControls
      class="game-view__controls game-view__controls--type-choose"
    /> -->
    <!-- <InventoryPage /> -->
  </div>
</template>

<script lang="ts">
import GControls from '@/components/game/GControls.vue'
import InventoryPage from '@/components/game/InventoryPage.vue'
import GResult from '@/components/game/GResult.vue'
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  components: { GResult, GControls, InventoryPage },
  setup() {
    // function setGameViewSizes() {
    //   const pageWidth = window.innerWidth
    //   const pageHeight = window.innerHeight

    //   // console.log(pageWidth, pageHeight)
    // }

    // onMounted(() => {
    //   setGameViewSizes()
    // })
    return { }
  }
})
</script>

<style lang="scss">
.game-view {
  position: relative;
  display: flex;

  &__result {
    position: relative;
    width: 683px;
    height: 683px;
  }

  &__controls {
    height: 100%;
    height: 683px;
    overflow: scroll;
  }
}
</style>
