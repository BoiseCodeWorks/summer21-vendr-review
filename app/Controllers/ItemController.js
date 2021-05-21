import { ProxyState } from "../AppState.js";
import {itemService} from "../Services/ItemService.js"

function drawMoney(){
  document.getElementById('money').innerText = ProxyState.money
}

function drawItems(){
  let template = ''
  ProxyState.items.forEach(i => template += i.Template)
  document.getElementById('items').innerHTML = template
}


export default class ItemController {

  constructor(){
    console.log("controller is linked");
    ProxyState.on('money', drawMoney)
    ProxyState.on('items', drawItems)
    drawMoney()
    drawItems() 
  }

  addMoney(){
    console.log("button worked");
    itemService.addMoney()
  }

  purchaseItem(itemName){
    itemService.purchaseItem(itemName)
  }

}