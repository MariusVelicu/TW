const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'root'
const DB_PASSWORD = 'pass'

let conn

mysql.createConnection({
    host:'localhost',
    user : DB_USERNAME,
    password : DB_PASSWORD,
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

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD,{
    dialect : 'mysql',
    logging: false,
    
})

let Homework = sequelize.define('homework', {
    student : Sequelize.STRING,
    content : Sequelize.STRING,
    grade : Sequelize.INTEGER
},{
    timestamps : false
})


const app = express()

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        const grades  = [2, 5, 7, 7, 3, 10, 9, 4, 10, 8]
        for (let i = 0; i < 10; i++){
            let homework = new Homework({
                student : `name${i}`,
                content : `some text here ${i}`,
                grade : grades[i]
            })
            await homework.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/homeworks', async (req, res) => {

    const pass = req.query.pass === 'true';
    try {
    if(pass) {
        const homeworks = await Homework.findAll({ where: { grade: { [Sequelize.Op.gte]: 5 } } });
        return res.status(200).json(homeworks);
    }
   
    if(!req.body) {
        let homeworks = await Homework.findAll();
        return res.status(200).json(homeworks)
    }

    } catch (err) {
    return res.status(500).json({ message: "server error" });
    }
    
     
    });


    app.get('/homeworks/:id', async (req, res) => {
        const id = req.params.id;
          const homework = await Homework.findByPk(id);
          if (!homework) {
            return res.status(404).json({ message: 'homework not found' });
          } 
          else if(req.accepts('text')) {
            return res.status(200).send(homework.content);
          }
          else {
            return res.status(200).send(homework)
          }
        
      });
// missing endpoint

module.exports = app