import {choice, remove} from './helpers'
import fruits from './foods'

const randFruit = choice(fruits)
console.log(`I'd like one ${randFruit}, please`)
console.log(`Here you go: ${randFruit}`)
console.log("Delicious! May I have another?")
remove(fruits, randFruit)
const numFruits = fruits.length
console.log(`I'm sorry, we're all out. We have ${numFruits} left`)