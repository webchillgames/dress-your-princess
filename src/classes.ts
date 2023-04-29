import { useGameStore } from './stores/game'

export class Item {
  ctx: CanvasRenderingContext2D
  img: HTMLImageElement
  id: number
  lineNumber: number

  constructor(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    id: number,
    lineNumber: number = 0
  ) {
    this.img = img
    this.id = id
    this.lineNumber = lineNumber
    this.ctx = ctx
  }

  draw() {
    const store = useGameStore()
    const { fragmentWidth, fragmentHeight } = store
    this.ctx.drawImage(
      this.img,
      fragmentWidth * this.id,
      this.lineNumber,
      fragmentWidth,
      fragmentHeight,
      0,
      0,
      fragmentWidth,
      fragmentHeight
    )
  }
}
