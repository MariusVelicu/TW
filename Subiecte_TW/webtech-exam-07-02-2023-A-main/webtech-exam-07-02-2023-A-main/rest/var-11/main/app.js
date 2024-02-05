const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('sqlite:memory')

let Student = sequelize.define('student', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    age: Sequelize.INTEGER
}, {
    timestamps: false
})

const app = express()
app.use(express.json())

app.get('/create', async (req, res) => {
    try {
        await sequelize.sync({ force: true })
        for (let i = 0; i < 10; i++) {
            let student = new Student({
                name: 'name ' + i,
                address: 'some address on ' + i + 'th street',
                age: 30 + i
            })
            await student.save()
        }
        res.status(201).json({ message: 'created' })
    }
    catch (err) {
        console.warn(err.stack)
        res.status(500).json({ message: 'server error' })
    }
})

app.get('/students', async (req, res) => {
    try {
        let students = await Student.findAll()
        res.status(200).json(students)
    }
    catch (err) {
        console.warn(err.stack)
        res.status(500).json({ message: 'server error' })
    }
})

app.put('/students/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        if (isNaN(id)) {
            res.status(404).json({ message: 'not found' })
            return
        }

        const requestBody = req.body
        if (!requestBody || Object.keys(requestBody).length === 0) {
            res.status(400).json({ message: 'body is missing' })
            return
        }

        const studentToUpdate = await Student.findByPk(id)
        if (!studentToUpdate) {
            res.status(404).json({ message: 'not found' })
            return
        }

        const { name, address, age } = requestBody
        if (name === undefined || address === undefined || age === undefined) {
            res.status(400).json({ message: 'malformed request' })
            return
        }

        await studentToUpdate.update({ name, address, age })
        res.status(202).json({ message: 'accepted' })
    }
    catch (err) {
        console.warn(err.stack)
        res.status(500).json({ message: 'server error' })
    }
})

module.exports = app
