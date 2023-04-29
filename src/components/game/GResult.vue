<template>
  <div class="g-result">
    <!-- <div>Загрузка {{loadingPercent}} %</div> -->
    <canvas ref="gameRef"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type Ref } from 'vue'
import { useGameStore } from '@/stores/game'
import { resourses } from '@/resourses'
import { Item } from '@/classes'

export default defineComponent({
  setup() {
    const gameStore = useGameStore()
    const {
      canvasWidth,
      canvasHeight,
      fragmentWidth,
      fragmentHeight,
      underwearId,
      bodyId,
      hairId,
      dressId,
      shoesId,
      browsId,
      lipsId,
      braceletId,
      capeBottomId,
      capeTopId,
      cheeksId,
      earringsId,
      veilId,
      hatId,
      girdleId,
      glovesId,
      necklaceId,
      inHandId,
      irisesId,
      eyesId,
      eyelushesId,
      backgroundId
    } = gameStore

    const gameRef: Ref<HTMLCanvasElement | undefined> = ref()
    const gameCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const loadingPercent = ref(0)
    const loadedImages = ref([])

    function loadResourses() {
      let j = 0
      resourses.forEach((v) => {
        const imgElement = new Image()
        imgElement.src = v.src
        imgElement.setAttribute('value', `${v.type}`)
        loadedImages.value.push(imgElement)

        imgElement.addEventListener('load', () => {
          j += 1

          loadingPercent.value = Math.round((100 * j) / 21)

          if (gameCtx.value && loadingPercent.value === 100) {
            drawElements()
          }
        })
      })
    }

    let background: Item
    let body: Item
    let hair: Item
    let underwear: Item
    let shoes: Item
    let brows: Item
    let lips: Item
    let bracelet: Item
    let capeBottom: Item
    let capeTop: Item
    let cheeks: Item
    let earrings: Item
    let veil: Item
    let hat: Item
    let girdle: Item
    let gloves: Item
    let necklace: Item
    let inHand: Item
    let dress: Item
    let eyelushes: Item
    let eyes: Item
    let irises: Item

    function drawElement(
      ctx: CanvasRenderingContext2D,
      item: Item,
      img: HTMLImageElement,
      id: number,
      lineNumber: number
    ) {
      item = new Item(ctx, img, id, lineNumber)
      item.draw()
    }

    function drawElements() {
      loadedImages.value.forEach((v) => {
        const currentValue = v.getAttribute('value')

        if (currentValue === 'background') {
          drawElement(gameCtx.value, background, v, backgroundId, 0)
        }

        if (currentValue === 'veil') {
          drawElement(gameCtx.value, veil, v, veilId, 0)
        }

        if (currentValue === 'body') {
          drawElement(gameCtx.value, body, v, bodyId, 0)
        }

        if (currentValue === 'underwear') {
          drawElement(gameCtx.value, underwear, v, underwearId, 0)
        }

        if (currentValue === 'shoes') {
          drawElement(gameCtx.value, shoes, v, shoesId, 0)
        }

        if (currentValue === 'brows') {
          drawElement(gameCtx.value, brows, v, browsId, 0)
        }

        if (currentValue === 'lips') {
          drawElement(gameCtx.value, lips, v, lipsId, 0)
        }

        if (currentValue === 'eyes') {
          drawElement(gameCtx.value, eyes, v, eyesId, 0)
        }

        if (currentValue === 'irises') {
          drawElement(gameCtx.value, irises, v, irisesId, 0)
        }

        if (currentValue === 'eyelushes') {
          drawElement(gameCtx.value, eyelushes, v, eyelushesId, 0)
        }

        if (currentValue === 'cheeks') {
          drawElement(gameCtx.value, cheeks, v, cheeksId, 0)
        }

        if (currentValue === 'hair') {
          drawElement(gameCtx.value, hair, v, hairId, 0)
        }

        if (currentValue === 'dress') {
          drawElement(gameCtx.value, dress, v, dressId, 0)
        }

        if (currentValue === 'gloves') {
          drawElement(gameCtx.value, gloves, v, glovesId, 0)
        }

        if (currentValue === 'bracelet') {
          drawElement(gameCtx.value, bracelet, v, braceletId, 0)
        }
      })
    }

    function setCanvasSize() {
      const canvases = document.querySelectorAll('canvas')

      canvases.forEach((v) => {
        v.width = fragmentWidth
        v.height = fragmentHeight

        v.setAttribute('style', `width: ${canvasWidth}px; height: ${canvasHeight}px`)
      })
    }

    onMounted(() => {
      setCanvasSize()
      loadResourses()

      if (gameRef.value) {
        gameCtx.value = gameRef.value.getContext('2d')
      }
    })

    return {
      loadingPercent,
      gameRef,
      canvasWidth,
      canvasHeight
    }
  }
})
</script>

<style lang="scss">
.g-result {
  position: relative;
  width: 683px;

  canvas {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
