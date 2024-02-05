const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const DB_USERNAME = 'root';
const DB_PASSWORD = 'pass';
let conn

mysql.createConnection({
    user : DB_USERNAME,
    password : DB_PASSWORD
})
.then((connection) => {
    conn = connection
    return connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
})
.then(() => {
    return conn.end()
})
.catch((err) => {
    console.warn(err.stack)
})

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    logging: false
});

class Device extends Sequelize.Model { };

Device.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
    }
}, {
    sequelize,
    modelName: 'devices',
    timestamps: false
});

const app = express();
app.use(bodyParser.json());

app.get('/create', async (req, res) => {
    await sequelize.sync({force: true});
    for(let i = 0; i < 10; i++) {
        await Device.create({name: `Device-${i}`, price: `${Math.random() * 100 + i + 10}`});
    }
    res.status(201).json({message: 'devices created'});
})

app.get('/device', async (req, res) => {
    const devices = await Device.findAll();
    res.status(200).send(devices);
})

app.post('/device', async (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({message: 'bad request'});
    }
    if (req.body.price < 0) {
        return res.status(400).json({message: 'bad request'});
    }
    if ((req.body.name).length < 4) {
        return res.status(400).json({message: 'bad request'});
    }

    const device = await Device.create({
        name: req.body.name,
        price: req.body.price
    });
    if (!device) {
        return res.status(400).json({message: 'bad request'});
    }

    return res.status(201).json({message: 'device created'});
})

app.delete('/device/:id', async (req, res) => {
    const deletedRows = await Device.destroy({
        where: {
            id: req.params.id
        }
    });

    if (deletedRows === 0) {
        return res.status(400).json({message: 'bad request'});
    }

    return res.status(202).json({message: 'device deleted'});
}) 

module.exports = app;