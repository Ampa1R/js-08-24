const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendReqest(url) {
  return new Promise ((resolve, reject) => {
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

    xhr.open("GET", `${API}${url}`, true);

    xhr.send();
  });
}  

class GoodsItem {
  constructor({id_product, product_name, price }) {
    this.id = id_product;
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `
      <div class="goods-item" data-id="${this.id}">
        <h3>${this.product_name}</h3>
        <p>${this.price}</p>
        <button name="add-to-basket">Buy</button>
      </div>
    `;
  }
}

class GoodsList {
  constructor(basket) {
    this.basket = basket;
    this.goods = [];
    this.filteredGoods = [];
    this.fetchGoods()
    .then(() => {
      this.render();
    });

  document.querySelector(".goods-list").addEventListener("click", (event) => {
    if (event.target.name === "add-to-basket") {
      const id = event.target.parentElement.dataset.id;
      const item = this.goods.find((goodsItem) => goodsItem.id_product === Number(id));
      this.basket.addItem(item);
    }
  });

  document.querySelector(".search").addEventListener("input", (event) => {
    this.filterGoods(event.target.value);
  });
}

  fetchGoods() {
    return new Promise ((resolve, reject) => {
    sendReqest(`/catalogData.json`)
    .then((goods) => {
      this.goods = goods;
      this.filteredGoods = goods;
      resolve();
    })
    .catch((err) => {reject(err);
    });
   });
  }
  
  total() {
    return this.goods.reduce((acc, cur) => acc + cur.price, 0);
  }

  filterGoods(value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter((item) => { 
      regexp.test(item.product_name);
      console.log(this.filteredGoods);
    });
    this.render();
  }

  render() {
    const goodsList = this.filteredGoods.map(item => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
}



class Basket {
constructor() {
  this.goods = [];
}

fetchGoods() {

}

addItem(item) {
  const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
  if (itemIndex !== -1) {
    this.goods[itemIndex].quantity++;
    
  }
}

remoteItem(id) {
  const itemIndex = this.goods.findIndex((goodsItem) => goodsItem.id_product === id);
  if (itemIndex !== -1) {
    this.goods.splice(itemIndex, 1);
  }
}

total() {

}

render() {

}


}

const basket = new Basket();
const goodsList = new GoodsList(basket);

class BasketItem {

  }
