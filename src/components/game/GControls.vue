<template>
  <div class="g-controls">
    <button type="button" v-for="v in elements" :key="v.id" :value="v.id">
      {{ t(v.title) }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

const elements = [
  { id: 'body', title: 'typesOfInventory.skin' },
  { id: 'hair', title: 'typesOfInventory.hair' },
  { id: 'dress', title: 'typesOfInventory.dress' },
  { id: 'shoes', title: 'typesOfInventory.shoes' },
  { id: 'brows', title: 'typesOfInventory.brows' },
  { id: 'lips', title: 'typesOfInventory.lips' },
  { id: 'bracelet', title: 'typesOfInventory.bracelet' },
  { id: 'cape', title: 'typesOfInventory.cape' },
  { id: 'cheeks', title: 'typesOfInventory.cheeks' },
  { id: 'earrings', title: 'typesOfInventory.earrings' },
  { id: 'veil', title: 'typesOfInventory.veil' },
  { id: 'hat', title: 'typesOfInventory.hat' },
  { id: 'girdle', title: 'typesOfInventory.girdle' },
  { id: 'gloves', title: 'typesOfInventory.gloves' },
  { id: 'necklace', title: 'typesOfInventory.necklace' },
  { id: 'inHand', title: 'typesOfInventory.inHand' },
  { id: 'underwear', title: 'typesOfInventory.underwear' }
  // { id: 'irises', title: 'typesOfInventory.irises' },
  // { id: 'eyelushes', title: 'typesOfInventory.eyelushes' },
  // { id: 'eyes', title: 'typesOfInventory.eyes' },
  // { id: 'background', title: 'typesOfInventory.background' }
]

export default defineComponent({
  setup() {
    const { t } = useI18n()

    return {
      elements,
      t
    }
  }
})
</script>

<style lang="scss">
.g-controls {
  display: flex;
  flex-direction: column;

  button {
    flex-shrink: 0;
    white-space: nowrap;
    width: 100%;
  }
}
</style>
