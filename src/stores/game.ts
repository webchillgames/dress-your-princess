import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    fragmentWidth: 2048,
    fragmentHeight: 2048,
    canvasWidth: 2048,
    canvasHeight: 2048,
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
      }
    }
  }
})
