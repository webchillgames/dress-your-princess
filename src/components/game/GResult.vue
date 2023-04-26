<template>
  <div class="g-result">
    <canvas ref="veilRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="capeBottomRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="bodyRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="underwearRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="eyesRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="irisesRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="cheeksRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="earringsRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="shoesRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="lipsRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="browsRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="dressRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="necklaceRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="capeTopRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="hairRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="hatRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="girdleRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="glovesRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="braceletRef" :width="canvasWidth" :height="canvasHeight"></canvas>
    <canvas ref="inHandRef" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, type Ref } from 'vue'
import { useGameStore } from '@/stores/game'

const assetsFolder = '../src/assets/princess'

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
      irisesId
    } = gameStore

    const bodyRef: Ref<HTMLCanvasElement | undefined> = ref()
    const bodyCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const hairRef: Ref<HTMLCanvasElement | undefined> = ref()
    const hairCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const dressRef: Ref<HTMLCanvasElement | undefined> = ref()
    const dressCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const shoesRef: Ref<HTMLCanvasElement | undefined> = ref()
    const shoesCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const browsRef: Ref<HTMLCanvasElement | undefined> = ref()
    const browsCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const lipsRef: Ref<HTMLCanvasElement | undefined> = ref()
    const lipsCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const braceletRef: Ref<HTMLCanvasElement | undefined> = ref()
    const braceletCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const capeBottomRef: Ref<HTMLCanvasElement | undefined> = ref()
    const capeBottomCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const capeTopRef: Ref<HTMLCanvasElement | undefined> = ref()
    const capeTopCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const cheeksRef: Ref<HTMLCanvasElement | undefined> = ref()
    const cheeksCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const earringsRef: Ref<HTMLCanvasElement | undefined> = ref()
    const earringsCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const veilRef: Ref<HTMLCanvasElement | undefined> = ref()
    const veilCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const hatRef: Ref<HTMLCanvasElement | undefined> = ref()
    const hatCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const girdleRef: Ref<HTMLCanvasElement | undefined> = ref()
    const girdleCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const glovesRef: Ref<HTMLCanvasElement | undefined> = ref()
    const glovesCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const eyesRef: Ref<HTMLCanvasElement | undefined> = ref()
    const eyesCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const necklaceRef: Ref<HTMLCanvasElement | undefined> = ref()
    const necklaceCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const inHandRef: Ref<HTMLCanvasElement | undefined> = ref()
    const inHandCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const underwearRef: Ref<HTMLCanvasElement | undefined> = ref()
    const underwearCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    const irisesRef: Ref<HTMLCanvasElement | undefined> = ref()
    const irisesCtx: Ref<CanvasRenderingContext2D | undefined> = ref()

    class Item {
      img: string
      id: number
      yCoord: number
      currentCtx: CanvasRenderingContext2D

      constructor(
        img: string,
        id: number,
        yCoord: number = 0,
        currentCtx: CanvasRenderingContext2D
      ) {
        this.img = `${assetsFolder}/${img}.png`
        this.id = id
        this.yCoord = yCoord
        this.currentCtx = currentCtx
      }

      draw() {
        const imgElement = new Image()
        imgElement.src = this.img

        imgElement.addEventListener('load', () => {
          this.currentCtx.drawImage(
            imgElement,
            fragmentWidth * this.id,
            this.yCoord,
            fragmentWidth,
            fragmentHeight,
            0,
            0,
            canvasWidth,
            canvasHeight
          )
        })
      }
    }

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

    function drawElement(
      canvasRef: HTMLCanvasElement,
      canvasCtx: CanvasRenderingContext2D,
      item: Item,
      img: string,
      id: number,
      yCoord: number
    ) {
      if (img === 'inHand') {
        console.log(3)
      }
      if (canvasRef) {
        canvasCtx = canvasRef.getContext('2d')
      }

      if (canvasCtx) {
        item = new Item(img, id, yCoord, canvasCtx)
        item.draw()
      }
    }

    function setCanvasZindex() {
      const canvases = document.querySelectorAll('canvas')

      canvases.forEach((v, i) => {

        v.setAttribute('style',`z-index: ${i + 1}`)
      })
    }

    onMounted(() => {
      setCanvasZindex()
      // BODY
      drawElement(bodyRef.value, bodyCtx.value, body, 'body', bodyId, 0)

      // HAIR
      drawElement(hairRef.value, hairCtx.value, hair, 'hair', hairId, 0)

      //   UNDERWEAR
      drawElement(underwearRef.value, underwearCtx.value, underwear, 'underwear', underwearId, 0)

      // SHOES
      drawElement(shoesRef.value, shoesCtx.value, shoes, 'shoes', shoesId, 0)

      // DRESS
      drawElement(dressRef.value, dressCtx.value, dress, 'dress', dressId, 0)

      // BROWS
      drawElement(browsRef.value, browsCtx.value, brows, 'brows', browsId, 0)

      //   LIPS
      drawElement(lipsRef.value, lipsCtx.value, lips, 'lips', lipsId, 0)

      // BRACELET
      drawElement(braceletRef.value, braceletCtx.value, bracelet, 'bracelet', braceletId, 0)

      //   CAPE BOTTOM
      drawElement(
        capeBottomRef.value,
        capeBottomCtx.value,
        capeBottom,
        'cape',
        capeBottomId,
        fragmentHeight
      )

      //   CAPE TOP
      drawElement(capeTopRef.value, capeTopCtx.value, capeTop, 'cape', capeTopId, 0)

      // CHEEKS
      drawElement(cheeksRef.value, cheeksCtx.value, cheeks, 'cheeks', cheeksId, 0)

      // EARRINGS
      drawElement(earringsRef.value, earringsCtx.value, earrings, 'earrings', earringsId, 0)

      // VEIL
      drawElement(veilRef.value, veilCtx.value, veil, 'veil', veilId, 0)

      // HAT
      drawElement(hatRef.value, hatCtx.value, hat, 'hat', hatId, 0)

      //   GIRDLE
      drawElement(girdleRef.value, girdleCtx.value, girdle, 'girdle', girdleId, 0)

      // GLOVES
      drawElement(glovesRef.value, glovesCtx.value, gloves, 'gloves', glovesId, 0)

      // NECKLACE
      drawElement(necklaceRef.value, necklaceCtx.value, necklace, 'necklace', necklaceId, 0)

      // IN HAND
      drawElement(inHandRef.value, inHandCtx.value, inHand, 'inHand', inHandId, 0)

      //   // IRISES
      //   if (irisesRef.value) {
      //     irisesCtx.value = irisesRef.value.getContext('2d')
      //   }
      //   if (irisesCtx.value) {
      //     draw(irisesImage, irisesCtx.value, irisesId)
      //   }

      // EYES
      //   drawElement(eyesRef.value, eyesCtx.value, eyes, 'eyes', eyesId, 0)
    })

    return {
      canvasWidth,
      canvasHeight,
      bodyRef,
      hairRef,
      underwearRef,
      browsRef,
      shoesRef,
      inHandRef,
      necklaceRef,
      eyesRef,
      glovesRef,
      girdleRef,
      hatRef,
      lipsRef,
      veilRef,
      earringsRef,
      cheeksRef,
      capeTopRef,
      capeBottomRef,
      braceletRef,
      dressRef,
      irisesRef
    }
  }
})
</script>

<style lang="scss">
.g-result {
  position: relative;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
