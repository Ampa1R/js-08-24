const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(express.static('.'));
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Ok! server is running on port: 3000');
});

app.get('/catalog', (req, res) => {
    fs.readFile('catalog.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error GET');
        } else {
            res.send(data);
        }
    });
});

//! Почему не могу обратиться напрямую к файлу? 
app.get('/catalog.json', (req, res) => {
    console.log('!!!on catalog.json!!!');
    res.send('catalog.json');
});
//!--------------------------------------------

app.get('/basket', (req, res) => { //*Синхронизация корзины
    fs.readFile('basket.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error GET');
        } else {
            res.send(data);
        }
    });
});

app.post('/basket', (req, res) => { //*Добавление товара в корзину
    fs.readFile('basket.json', 'utf-8', (err, data) => {

        console.log('Ok! -> POST');

        if (err) {
            console.log('Error POST');
        } else {
            const logs = [];
            let basket = JSON.parse(data);
            if (!isNaN(req.body[0])) {
                const id = req.body[0];
                logs.push(`Dell All: ` + (basket.find(item => item.id_product == id)).product_name);
                basket = basket.filter(item => item.id_product != id);
            } else {
                const item = req.body;
                logs.push(`Add: ` + (item.product_name));
                const indexCloneItem = basket.findIndex(elem => elem.id_product == item.id_product);
                if (indexCloneItem != -1) {
                    basket[indexCloneItem].count++;
                } else {
                    item.count = 1;
                    basket.push(item);
                }
            }

            fs.writeFile('basket.json', JSON.stringify(basket), (err) => {
                if (err) {
                    console.log('Error WriteFile');
                }
            });

            fs.appendFile('logs.json', JSON.stringify(logs), (err) => {
                if (err) {
                    console.log('Error WriteFile');
                }
            });
            res.send('Ok!');
            console.log('send(Ok!) <- SERVER');
        }
    });
});