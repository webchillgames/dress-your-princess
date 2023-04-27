<template>
  <div class="game-view">
    <GControls
      :elements="itemsTypes"
      class="game-view__controls game-view__controls--type-choose"
    />
    <div class="game-view__result">
      <GResult />
    </div>

    <!-- <GControls class="game-view__controls game-view__controls--type-choose" /> -->
  </div>
</template>

<script lang="ts">
import GControls from '@/components/game/GControls.vue'
import GResult from '@/components/game/GResult.vue'
import { defineComponent, onMounted } from 'vue'

const itemsTypes = [
  { id: 'body', title: 'body' },
  { id: 'hair', title: 'hair' },
  { id: 'dress', title: 'dress' },
  { id: 'shoes', title: 'shoes' },
  { id: 'brows', title: 'brows' },
  { id: 'lips', title: 'lips' },
  { id: 'bracelet', title: 'bracelet' },
  { id: 'cape', title: 'cape' },
  { id: 'cheeks', title: 'cheeks' },
  { id: 'earrings', title: 'earrings' },
  { id: 'veil', title: 'veil' },
  { id: 'hat', title: 'hat' },
  { id: 'girdle', title: 'girdle' },
  { id: 'gloves', title: 'gloves' },
  { id: 'necklace', title: 'necklace' },
  { id: 'inHand', title: 'inHand' },
  { id: 'underwear', title: 'underwear' },
  { id: 'irises', title: 'irises' },
  { id: 'eyelushes', title: 'eyelushes' },
  { id: 'eyes', title: 'eyes' },
  { id: 'background', title: 'background' }
]

export default defineComponent({
  components: { GResult, GControls },
  setup() {
    function setGameViewSizes() {
      const pageWidth = window.innerWidth
      const pageHeight = window.innerHeight

      console.log(pageWidth, pageHeight)
    }

    onMounted(() => {
      setGameViewSizes()
    })
    return { itemsTypes }
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
    // overflow: scroll;
  }
}
</style>
