const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.students = [
    {
        name: "Gigel",
        surname: "Popel",
        age: 23
    },
    {
        name: "Gigescu",
        surname: "Ionel",
        age: 25
    }
];

app.get('/students', (req, res) => {
    res.status(200).json(app.locals.students);
});

app.post('/students', (req, res, next) => {
   if(JSON.stringify(req.body)=="{}")
    {
        res.status(500).json({message:'Body is missing'});
    }
    else
    {
        if(req.body.name && req.body.surname && req.body.age)
        {
            if(req.body.age<0)
            {
                res.status(500).json({message: 'Age should be a positive number'});
            }
            else
            {
                var ok=true;
                app.locals.students.forEach(s=>{
                    if(s.name==req.body.name){
                        
                        res.status(500).json({message: 'Student already exists'});
                        ok=false;
                    }
                });
                if(ok==true)
                {
                    app.locals.students.push({name:req.body.name,surname:req.body.surname,age:req.body.age});
                    res.status(201).json({message: 'Created'});
                }
            }
        }
        else
        {
            res.status(500).json({message: 'Invalid body format'});
        }
    }
});

module.exports = app;