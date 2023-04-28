<template>
  <div class="inventory-page" ref="inventoryPage">
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useGameStore } from '@/stores/game'
const folderLink = `./../src/assets/princess`

export default defineComponent({
  setup() {
    const inventoryPage = ref()
    const numberOfItems = ref(0)
    const numberOfLines = ref(1)

    const imgScale = ref(1)
    const imgPosition = ref(``)

    const sizeOfSide = ref(0)

    const gameStore = useGameStore()
    const { fragmentWidth, fragmentHeight, inventoryOpenPage } = gameStore

    function countItems() {
      const ininitialImage = new Image()
      ininitialImage.src = `${folderLink}/${inventoryOpenPage}.png`

      ininitialImage.addEventListener('load', () => {
        numberOfItems.value = ininitialImage.width / fragmentWidth

        console.log(ininitialImage.height)

        numberOfLines.value = ininitialImage.height / fragmentHeight

        createItems()
      })
    }

    class Item {
      id: number
      lineId: number

      constructor(id: number, lineId: number = 0) {
        this.id = id
        this.lineId = lineId
      }

      create() {
        const buttonEl = document.createElement('button')
        buttonEl.classList.add('inventory-page__button')
        buttonEl.style.width = `${sizeOfSide.value}px`
        buttonEl.style.height = `${sizeOfSide.value}px`
        buttonEl.style.backgroundImage = `url(${folderLink}/${inventoryOpenPage}.png)`

        switch (inventoryOpenPage) {
          case 'inHand':
            imgScale.value = 5
            imgPosition.value = `${-this.id * 500 - 200 + 25}px ${this.lineId - 200}px`
            break
          case 'dress':
            imgPosition.value = `${this.id * sizeOfSide.value}px ${
              this.lineId * sizeOfSide.value
            }px`
        }

        buttonEl.style.backgroundSize = `${
          sizeOfSide.value * numberOfItems.value * imgScale.value
        }px ${sizeOfSide.value * numberOfLines.value * imgScale.value}px`

        buttonEl.style.backgroundPosition = imgPosition.value

        inventoryPage.value.appendChild(buttonEl)
      }
    }

    let item: Item

    function createItems() {
      for (let j = 0; j < numberOfLines.value; j++) {
        for (let i = 0; i < numberOfItems.value; i++) {
          item = new Item(i, j)
          item.create()
        }
      }
    }

    function setButtonSize() {
      switch (inventoryOpenPage) {
        case 'dress':
          sizeOfSide.value = 200
          break
        case 'inHand':
          sizeOfSide.value = 100
          break
      }
    }

    onMounted(() => {
      setButtonSize()
      countItems()
    })

    return { inventoryPage }
  }
})
</script>

<style lang="scss">
.inventory-page {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 600px;
  height: 600px;

  &__button {
    // border: none;
    background-color: transparent;
    filter: none;
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      //   filter: drop-shadow(0 0 0.75rem #d5f4ff);
    }
  }

  &__bg-image {
    flex-shrink: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
