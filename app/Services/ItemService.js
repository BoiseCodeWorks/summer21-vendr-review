import { ProxyState } from "../AppState.js";


class ItemService {

  constructor(){
    console.log('service is linked');
  }

  addMoney(){
    ProxyState.money += .25
    console.log(ProxyState.money);
  }

  purchaseItem(itemName){
    let foundItem = ProxyState.items.find(i => i.name == itemName)
    console.log(foundItem);
    if(ProxyState.money >= foundItem.price && foundItem.quantity > 0){
      ProxyState.money -= foundItem.price
      foundItem.quantity--
      ProxyState.items = ProxyState.items 
    } else {
      window.alert("y u no has $??")
    }
  }

}


export const itemService = new ItemService()