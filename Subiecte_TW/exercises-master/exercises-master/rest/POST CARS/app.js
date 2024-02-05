const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.cars = [
    {
        make: "BMW",
        model: "X6",
        price: 50000
    },
    {
        make: "Lamborghini",
        model: "Huracan",
        price: 200000
    },
];

app.get('/cars', (req, res) => {
    res.status(200).json(app.locals.cars);
});

app.post('/cars', (req, res, next) => {
    if(JSON.stringify(req.body)=="{}")
    {
        res.status(500).json({message:'Body is missing'});
    }
    else
    {
        if(req.body.make && req.body.model && req.body.price)
        {
            if(req.body.price<0)
            {
                res.status(500).json({message: 'Price should be a positive number'});
            }
            else
            {
                var ok=true;
                app.locals.cars.forEach(s=>{
                    if(s.model==req.body.model){
                        
                        res.status(500).json({message: 'Car already exists'});
                        ok=false;
                    }
                });
                if(ok==true)
                {
                    app.locals.cars.push({make:req.body.make,model:req.body.model,price:req.body.price});
                    res.status(201).json({message: 'Created'});
                }
            }
        }
        else
        {
            res.status(500).json({message: 'Invalid body format'});
        }
    }
})

module.exports = app;