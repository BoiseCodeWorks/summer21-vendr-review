import Item from "./Models/Item.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  money = 0 

  items = [new Item("doritoes", "toes? maybe cool ranch idk", 2.50, 10, 'https://i.pinimg.com/474x/7d/6c/84/7d6c847d8a923f6f7707ae9a64539969--corn-chips-kettle-corn.jpg'), new Item("zapps", "criminally underrated", 3, 30, 'https://i.pinimg.com/474x/a8/10/8b/a8108b21c3e02c4c3df2b8e25899d86d.jpg'), new Item("cheetos", "meh", 3, 30, 'https://i.pinimg.com/474x/ff/c4/32/ffc4328c08ee15f3032ef9f0b20bea9a.jpg')]


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
