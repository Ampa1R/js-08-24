

const express = require('express');
const fs      = require('fs');
const cors    = require('cors');
const app     = express();

app.use(express.static('.'));
app.use(express.json());
app.use(cors());


function ReadJson(file, res)
{
    fs.readFile(file, 'utf-8', (err, data) => 
    {
        if (err) {
            console.log('Error' + err);

            res.status(500).send('Server error');

            return;
        }

        try {
            const new_data = JSON.parse(data);

            res.json(new_data);
        } catch (err) { 
            console.log ('Ошибка синтаксического анализа строки JSON:', err);
        }
    });
}

function RecordStat(action, good) 
{
    fs.readFile('stats.json', 'utf-8', (err, data) => 
    {
        if (err) { 
            console.log ("Ошибка чтения файла с диска:", err);
        } 

        try {
            let stats       = JSON.parse(data);
            let currentdate = new Date(); 
            let time        =  currentdate.getHours() + ":" + 
                currentdate.getMinutes();

            stats.push({'action': action, 'name_good': good, 'time': time});

            fs.writeFile('stats.json', JSON.stringify(stats, null, 2), (err) => {
                if (err) console.log('Error' + err);
            });
        } catch (err) { 
            console.log ('Ошибка синтаксического анализа строки JSON:', err);
        }
    });
}

app.get('/catalog', (req, res) => ReadJson('catalog.json', res)); 

app.get('/cart', (req, res) => ReadJson('cart.json', res));

app.post('/addToCart', (req, res) => 
{
    fs.readFile('cart.json', 'utf-8', (err, data) => 
    {
        if (err) { 
            console.log("Ошибка чтения файла с диска:", err);
        } 

        try {
            let cart = JSON.parse(data);

            cart.push(req.body);

            fs.writeFile('cart.json', JSON.stringify(cart, null, 2), (err) => {
                if (err) console.log('Error' + err);

                res.send('OK');
            })

            RecordStat('Add to cart', req.body.product_name);
        } catch (err) { 
            console.log('Ошибка синтаксического анализа строки JSON:', err);
        }
    });
});

app.post('/increaseAmountToCart', (req, res) => 
{ 
    fs.readFile('cart.json', 'utf-8', (err, data) => 
    {
        if (err) { 
            console.log("Ошибка чтения файла с диска:", err);
        } 

        try {
            let cart    = JSON.parse(data);
            let request = req.body;

            for (var i in cart) {
                if (cart[i].id_product === request.id_product) cart[i].quantity++;
            }

            fs.writeFile('cart.json', JSON.stringify(cart, null, 2), (err) => {
                if (err) console.log('Error' + err);

                res.send('OK');
            })

            toRecordStat('increase in the quantity of goods', req.body.product_name);
        } catch (err)  { 
            console.log ('Ошибка синтаксического анализа строки JSON:', err);
        }
    });
});

app.post('/decreaseOrRemoveAmount', (req, res) => 
{ 
    fs.readFile('cart.json', 'utf-8', (err, data) => 
    {
        if (err) { 
            console.log("Ошибка чтения файла с диска:", err);
        }  

        try {
            let cart    = JSON.parse(data);
            let request = req.body;
            let action = '';

            for (var i in cart) {
                if (cart[i].id_product === request.id_product) {
                    if (cart[i].quantity > 1) {
                        cart[i].quantity--; 
                        action = 'decrease in the quantity of goods';
                    }
                    else {
                        cart.splice(i, 1);
                        action = 'removal of goods';
                    }
                }
            }

            fs.writeFile('cart.json', JSON.stringify(cart, null, 2), (err) => {
                if (err) console.log('Error' + err);

                res.send('OK');
            })

            RecordStat(action, req.body.product_name);
        } catch (err) { 
            console.log ('Ошибка синтаксического анализа строки JSON:', err);
        }
    });
});

app.listen(3000, () => console.log('server is running on port 3000!'));