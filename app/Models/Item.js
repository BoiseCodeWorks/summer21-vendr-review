export default class Item {
  constructor(name, description, price, quantity, img = 'placehold.it/200x200'){
    this.name = name
    this.description = description
    this.price = price
    this.quantity = quantity
    this.img = img
  }

  get Template(){
    return  /*html*/ `
    <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${this.img}" alt="Card image cap">
          <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
           <p class="card-text">${this.description}</p>
           <p class="card-text">Price - ${this.price}</p>
           <p class="card-text ${this.quantity > 3 ? 'text-success' : this.quantity >= 1 ? 'text-warning' : this.quantity == 0 ? 'text-danger' : ""}">Quantity - ${this.quantity}</p>
          <button class="btn btn-danger" onclick="app.itemController.purchaseItem('${this.name}')">Purchase Me</button>
        </div>
    </div>
    `
  }

}