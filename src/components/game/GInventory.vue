<template>
  <div class="g-inventory">
    <canvas ref="inventoryRef"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useGameStore } from '@/stores/game'

const elements: Array<any> = [
  { file: 'body.png' },
  { file: 'bracelet.png' },
  { file: 'brows.png' },
  { file: 'cape.png' },
  { file: 'cheeks.png' },
  { file: 'dress.png' },
  { file: 'earrings.png' },
  { file: 'eyelushes.png' },
  { file: 'eyes.png' },
  { file: 'girdle.png' },
  { file: 'gloves.png' },
  { file: 'hair.png' },
  { file: 'hat.png' },
  { file: 'inHand.png' },
  { file: 'irises.png' },
  { file: 'lips.png' },
  { file: 'necklace.png' },
  { file: 'shoes.png' },
  { file: 'underwear.png' },
  { file: 'veil.png' }
]

const folderLink = `./../src/assets/princess`

export default defineComponent({
  setup() {
    const inventoryRef = ref()
    const items = ref([])
    const gameStore = useGameStore()
    const { fragmentWidth, fragmentHeight, inventoryOpenPage } = gameStore

    function countItemsFromSprite() {
      //   const array = []

      elements.map((v, i) => {
        const item = v
        item.id = i + 1
        let numberOfItems: number
        let numberOfLines: number

        const initialImage = document.createElement('img')
        initialImage.src = `${folderLink}/${v.file}`

        initialImage.addEventListener('load', () => {
          numberOfItems = initialImage.width / fragmentWidth
          numberOfLines = initialImage.height / fragmentHeight
          item.lines = numberOfLines
          item.itemsInLine = numberOfItems

          items.value.push(item)
          createWrapper(item, i)
        })
      })

      //   items.value = array
    }

    function createWrappers() {
      console.log(items.value)

      items.value.forEach(createWrapper)
    }

    function createWrapper(v, id: number) {
      const wrapper = document.createElement('div')
      wrapper.classList.add(`wrapper-${id + 1}`)
      console.log(v)

      for (let i = 0; i <= v.itemsInLine; i++) {
        const imgEl = document.createElement('img')
        imgEl.style.width = '100px'
        imgEl.style.height = '100px'
        imgEl.style.background = `${folderLink}/${v.file} 1500 1500`

        // imgEl.style.backgroundSize = '100% 100%'
        wrapper.appendChild(imgEl)
      }
      // wrapper.style.backgroundImage = `${folderLink}/${v.file} 0 0`
      inventoryRef.value.appendChild(wrapper)
      console.log(`${folderLink}/${v.file}`)
    }

    function createImage(img, id) {
      const imgEl = document.createElement('img')
      imgEl.width = 100
      imgEl.height = 100
      imgEl.style.background = `${img} ${id * 2048} 0`

      return imgEl
    }

    function createInventory() {
      countItemsFromSprite()

        if (items.value.length) {
          createWrappers()
        }
    }

    onMounted(() => {
      createInventory()
    })

    return {
      inventoryRef,
      items
    }
  }
})
</script>

<style lang="scss">
.g-inventory {
  display: flex;

  &__item {
    width: 200px;
    height: 200px;

    img {
      // width: 100%;
      // height: 100%;
    }
  }
}
</style>
