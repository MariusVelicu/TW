const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.products = [
    {
        name: "Iphone XS",
        category: "Smartphone",
        price: 5000
    },
    {
        name: "Samsung Galaxy S10",
        category: "Smartphone",
        price: 3000
    },
    {
        name: "Huawei Mate 20 Pro",
        category: "Smartphone",
        price: 3500
    }
];

app.get('/products', (req, res) => {
    res.status(200).json(app.locals.products);
});

app.post('/products', (req, res, next) => {
    if(JSON.stringify(req.body)=='{}')
    {
        res.status(500).json({message:"Body is missing"});
    }
    else{
        if(req.body.name && req.body.category && req.body.price)
        { if(req.body.price >0)
        { var ok=true;
            app.locals.products.forEach((e)=>
            {
                if(e.name== req.body.name)
                { ok=false;
                res.status(500).json({message: "Product already exists"});
                }
              
            });
           if(ok==true) app.locals.products.push({name: req.body.name, category: req.body.category, price: req.body.price});
            res.status(201).json({message: "Created"});
        }
        else
        { 
            res.status(500).json({message: "Price should be a positive number"});
        }
            
        }
        else
        {
            res.status(500).json({message: "Invalid body format"});
        }
    
    }
})

module.exports = app;