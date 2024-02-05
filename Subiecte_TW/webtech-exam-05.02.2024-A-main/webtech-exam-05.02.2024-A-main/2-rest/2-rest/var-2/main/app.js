const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

let Person = sequelize.define('person', {
    name : Sequelize.STRING,
    category : {
        type: Sequelize.STRING,
        validate: {
            len: [3, 10]
        },
        allowNull: false
    },
    job : Sequelize.STRING
},{
    timestamps : false
})


const app = express()

app.use(express.json())

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        for (let i = 0; i < 10; i++){
            let person = new Person({
                name: 'name ' + i,
                category: ['RETIRED', 'ACTIVE', 'UNKNOWN'][Math.floor(Math.random() * 3)],
                job: ['ACCOUNTANT', 'PROGRAMMER', 'RESEARCHER'][Math.floor(Math.random() * 3)]
            })
            await person.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/people', async (req, res, next) => {
    try {
        const filters = req.query;

        // Verificați dacă filtrul este gol și returnați toate înregistrările
        if (Object.keys(filters).length === 0) {
            const people = await Person.findAll();
            return res.status(200).json(people);
        }

        // Verificați dacă una dintre cheile filtrului este goală și returnați eroare
        for (const key in filters) {
            if (filters[key] === '') {
                return res.status(400).json({ message: 'one of the filter keys is not defined' });
            }
        }

        // Construiți obiectul de filtrare pentru Sequelize
        const sequelizeFilter = {};
        for (const key in filters) {
            sequelizeFilter[key] = filters[key].toUpperCase(); // Convertiți la uppercase pentru a face filtrarea case-insensitive
        }

        // Interogați baza de date cu filtrul și returnați rezultatele
        const people = await Person.findAll({
            where: sequelizeFilter,
        });

        return res.status(200).json(people);
    } catch (err) {
        next(err);
    }
});


app.use((err, req, res, next) => {
    console.warn(err)
    res.status(500).json({ message: 'server error' })
})

module.exports = app