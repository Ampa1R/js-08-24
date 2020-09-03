"use strict";
/* Начало начального кода.
class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
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
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  goodsPriceSum() {
   let result = null;
   this.goods.forEach(good => {
    result += good.price;
   });
  console.log(result);
  return result;
  }
}

class Basket {
  constructor() {
    this.button = document.querySelector(".cart-button");
    this.product = {};
  }

 clickByBasket() {
 }

 addProductInBasket() {

} 

 renderProductInBasket() {

}

renderTotalQuantityProductInBasket() {

}

renderTotalSum() {

}

}

class ElementBasket {

  renderImageFronDeletProduct () {

  }

  removeProductOfBasket() {
  }

  renderSendButtonProduct() {

  }

  sendProduct() {

  }

  renderCancelButton() {

  }

  cancelOrder() {
    
  }

}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.goodsPriceSum();
Конец начального кода*/


function makeGETRequest(url, callback) {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


  class GoodsItem {
      render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
      }
    }
    
    class GoodsList {

      constructor () {
      this.goods = [];
      }

      fetchGoods(cd) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
          this.goods = JSON.parse(goods);
          console.log(this.goods);
          cd();
        })
      }
      

      render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.product_name, good.price);
          listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
      }
    }

  const list = new GoodsList();
  list.fetchGoods(() => {
    list.render();
  });
  
