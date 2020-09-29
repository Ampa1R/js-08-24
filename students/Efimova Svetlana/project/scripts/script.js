<<<<<<< HEAD
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
=======
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
    
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.responseText);
                }
            }
        }
        
        xhr.open('GET', `${API}${url}`, true);

        xhr.send();
    });
} 

/* class GoodsItem {
    constructor({ product_name, price }) {
      this.title = product_name;
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
 */
/* class GoodsList {
    constructor() {
      this.goods = [];
      this.fetchGoods()
        .then(() => {
            this.render();
        })
        .catch((err) => {
            console.log('[ERROR]', err);
        });
    }

    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
    }

    fetchGoods() {
        return new Promise((resolve, reject) => {
            sendRequest(`/catalogData.json`)
            .then((goods) => {
                this.goods = goods;
                this.render();
                this.renderSum();
                resolve();
            })
            .catch((err) => {
                reject(err);
            });
        });
        
    } 

    render() {
    const goodsList = this.goods.map(item => {
        const goodItem = new GoodsItem(item);
        return goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }

    countSum() {
        return this.goods.reduce((acc, cur) => acc + cur.price, 0);
    }

    renderSum() {
        document.querySelector('.total').textContent = this.countSum();
    }
} */

/* const goodsList = new GoodsList(); */

/* goodsList.fetchGoods(); */
/* goodsList.render(); */
/* goodsList.renderSum(); */

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

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        searchLine: ''
    },
    created(){
        this.fetchGoods();
    },
    computed: {
        filteredGoods(value) {
            const regexp = new RegExp(this.searchLine, 'i');
            return this.goods.filter(item => regexp.test(item.product_name));
        },
        countSum() {
            return this.goods.reduce((acc, cur) => acc + cur.price, 0);
        },
    },
    methods: {
        fetchGoods() {
            return new Promise((resolve, reject) => {
                sendRequest(`/catalogData.json`)
                .then((goods) => {
                    this.goods = goods;
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
            }); 
        },       
    }
});

let buttonBasket = document.querySelector('.cart-button');
buttonBasket.addEventListener('click', buttonBasketClickHandler);  

function buttonBasketClickHandler(event) {
    let basketTable = document.querySelector('table');
    basketTable.classList.toggle('hidden');
}
>>>>>>> 6ccf0fe93e54185397e6ccd4ffb4cb481a70d770
