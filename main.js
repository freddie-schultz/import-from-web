import { animate } from 'https://cdn.skypack.dev/motion'

const spins = 100

for (let i in spins) {
  animate('#box', { x: 0, rotate: 360 }, { duration: 1 })
  console.log(i)
}
