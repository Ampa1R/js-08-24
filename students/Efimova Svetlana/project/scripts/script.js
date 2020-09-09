<<<<<<< HEAD
const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Dress'},
    { price: 200 },
  ];
  
  const renderGoodsItem = (title = "T-shirt", price = 100) => 
    `<div class="goods-item"><h3>${title}</h3><div class="goods-item-img"></div><p>${price}</p><button class="cart-button" type="button">Добавить</button></div>`;
  
  const renderGoodsList = (list = "test") => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods);
=======
class GoodsItem {
    constructor({ title, price }) {
      this.title = title;
      this.price = price;
    }

    render() {
      return `
        <div class="goods-item">
            <h3>${this.title}</h3>
            <div class="goods-item-img"></div>
            <p>${this.price}</p>
            <button class="cart-button" type="button">Добавить</button>
        </div>
        `;
    }
}

class GoodsList {
    constructor() {
      this.goods = [];
    }

    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }

    render() {
    const goodsList = this.goods.map(item => {
        const goodItem = new GoodsItem(item);
        return goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }

    countSum() {
        let sum = 0;
        for (let key in this.goods) {
            sum += this.goods[key].price;
        }
        return sum;
    }

    renderSum() {
        document.querySelector('.total').textContent = this.countSum();
    }
}

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
goodsList.renderSum();

class BasketItem {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    render() {

    }
}

class Basket {
    constuctor() {
        this.items = [];
    }

    render() {

    }

    addItems() {

    }

    deleteItems() {

    }

    countSum() {

    }

    renderSum() {
        
    }
}
>>>>>>> a370396b312426e1c35a5f5119432e0bcf6ae41e
