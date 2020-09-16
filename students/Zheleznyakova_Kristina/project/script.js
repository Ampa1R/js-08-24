const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) 
{
    return new Promise((resolve, reject) => 
    {
        const xhr = new XMLHttpRequest;

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) 
            {
                if (xhr.status === 200) resolve(JSON.parse(xhr.responseText));
                else reject(xhr.responseText);
            }
        }

        xhr.open('GET', `${API_URL}${url}`, true);
        xhr.send();   
    })
}

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        goods_basket: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: 'hidden',
    },
    created() {
        this.fetchGoods();
    },
    computed: {
        total() 
        {
            return this.goods_basket.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        },
    },
    methods: {         
        fetchGoods() 
        {
            return new Promise((resolve, reject) => 
            {
                makeGETRequest(`/catalogData.json`)
                .then((goods) => 
                {
                    this.goods         = goods;
                    this.filteredGoods = goods;

                    resolve();   
                })
                .catch((err) => reject(err))
            });
        },
        filterGoods()
        {
            const regexp              = new RegExp(this.searchLine, 'i');
            return this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
        }, 
        showBasket() 
        {
            if (this.isVisibleCart === 'hidden') this.isVisibleCart = 'visible'
            else this.isVisibleCart = 'hidden';
        },
        addItemBasket(item)
        {
            const itemIndex = this.goods_basket.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
            
            if (itemIndex !== -1) this.goods_basket[itemIndex].quantity++;
            else this.goods_basket.push({ ...item, quantity: 1 });
            
            console.log(this.goods_basket);  
        },
        get_basket_items()
        {
            return console.log(this.goods_basket);
        },   
        remove_item(item) 
        {    
            const itemIndex = this.goods_basket.findIndex((goodsItem) => goodsItem.id_product === item.id_product);
            
            if (itemIndex !== -1) 
            {
                if (item.quantity > 1) item.quantity--
                else this.goods_basket.splice(itemIndex, 1);
            }
        },
    },
});
