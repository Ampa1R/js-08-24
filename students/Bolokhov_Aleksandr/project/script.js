const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

class GoodsItem {
  constructor({ product_name, price }) {
    this.title = product_name;
    this.price = price;
  }

  render() {
    return `
      <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
      </div>
    `;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.fetchGoods().then(response => {
      this.goods = JSON.parse(response);
      this.render();
    });

  }

  fetchGoods() {
    return new Promise ((resolve, reject) => {
      let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
      xhr.open("GET", API, true);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
   
  }

  total() {
    return this.goods.reduce((acc, cur) => acc + cur.price, 0);
  }

  render() {
    console.log(this.goods)
    const goodsList = this.goods.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
}

const goodsList = new GoodsList();
goodsList.render();

class Basket {
  constructor() {
    this.goods = [];
  }

  static foo () {
    console.log('static foo method');
  }

  fetchGoods() {

  }

  addItem(item) {

  }

  removeItem(id) {

  }

  total() {

  }

  render() {

  }
}

class BasketItem {
  constructor(item, basket) {
    this.item = item;
    this.basket = basket;
  }

  addItem() {
    this.basket.addItem(this.item.id);
  }

  removeItem() {
    this.basket.removeItem(this.item.id);
  }

  add() {
    this.item.quantity += 1;
  }

  render() {

  }
}
