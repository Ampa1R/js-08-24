

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
            console.log('Ошибка синтаксического анализа строки JSON:', err);
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

            return;
        } 

        try {
            let cart        = JSON.parse(data);
            let action      = '';
            const itemIndex = cart.findIndex(({ id_product }) => id_product === req.body.id_product);
            
            if (itemIndex !== -1) {
                cart[itemIndex].quantity++;

                action = 'Add to cart';
            }
            else {
                cart.push({ ...req.body, quantity: 1 });

                action = 'increase amount of goods';
            }
            
            fs.writeFile('cart.json', JSON.stringify(cart, null, 2), (err) => {
                if (err) {
                    console.log('Error' + err); 
                    
                    return;
                }

                res.send('OK');
            })

            RecordStat('Add to cart', req.body.product_name);
        } catch (err) { 
            console.log('Ошибка синтаксического анализа строки JSON:', err);
        }
    });
});

app.post('/decreaseOrRemoveAmount', (req, res) => 
{ 
    fs.readFile('cart.json', 'utf-8', (err, data) => 
    {
        if (err) { 
            console.log("Ошибка чтения файла с диска:", err);

            return;
        }  

        try {
            let cart        = JSON.parse(data);
            let action      = '';
            const itemIndex = cart.findIndex(({ id_product }) => id_product === req.body.id_product);

            if (itemIndex !== -1 && cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity--; 

                action = 'decrease in the quantity of goods';
            } else {
                cart.splice(itemIndex, 1);
                
                action = 'removal of goods';
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