import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    fragmentWidth: 2048,
    fragmentHeight: 2048,
    canvasWidth: 683,
    canvasHeight: 683,
    bodyId: 0,
    hairId: 0,
    dressId: 0,
    shoesId: 0,
    browsId: 0,
    lipsId: 0,
    braceletId: 0,
    capeBottomId: 0,
    capeTopId: 0,
    cheeksId: 0,
    earringsId: 0,
    veilId: 0,
    hatId: 0,
    girdleId: 0,
    glovesId: 0,
    necklaceId: 0,
    inHandId: 0,
    underwearId: 0,
    irisesId: 0,
    eyelushesId: 0,
    eyesId: 0,
    backgroundId: 0,
    inventoryOpenPage: 'dress'
  }),
  actions: {
    changePrincess(item: string, id: number) {
      switch (item) {
        case 'body':
          this.bodyId = id
          break
        case 'hair':
          this.hairId = id
          break
        case 'dress':
          this.dressId = id
          break
        case 'shoes':
          this.shoesId = id
          break
        case 'brows':
          this.browsId = id
          break
        case 'lips':
          this.lipsId = id
          break
        case 'bracelet':
          this.braceletId = id
          break
        case 'capeBottom':
          this.capeBottomId = id
          break
        case 'capeTop':
          this.capeTopId = id
          break
        case 'cheeks':
          this.cheeksId = id
          break
        case 'earrings':
          this.earringsId = id
          break
        case 'veil':
          this.veilId = id
          break
        case 'hat':
          this.hatId = id
          break
        case 'girdle':
          this.girdleId = id
          break
        case 'gloves':
          this.glovesId = id
          break
        case 'necklace':
          this.necklaceId = id
          break
        case 'inHand':
          this.inHandId = id
          break
        case 'underwear':
          this.underwearId = id
          break
        case 'irises':
          this.irisesId = id
          break
        case 'eyelushes':
          this.eyelushesId = id
          break
      }
    }
  }
})
