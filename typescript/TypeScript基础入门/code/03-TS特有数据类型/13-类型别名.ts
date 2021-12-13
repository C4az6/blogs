type IDType = string | number | boolean
type PointType = {
  x: number
  y: number
  z?: number
}

function printId(id: IDType) {
  console.log(id)
}

function printPoint(point: PointType) {
  const { x, y, z } = point
  console.log(x, y, z)
}

printId('asdf')
printId(123456)
printId(false)

printPoint({ x: 111, y: 222 })
printPoint({ x: 111, y: 222, z: 333 })
