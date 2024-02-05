const express = require('express')

const app = express()
// TODO
app.use(express.static('public'))
app.use(express.json())

app.locals.data = [{
    name :  'jim',
    job : 'engineer'
},{
    name :  'tim',
    job : 'accountant'
},{
    name :  'ann',
    job : 'accountant'
}]

app.get('/employees', (req, res) => {
    res.status(200).json(app.locals.data)
})

app.post('/employees', (req, res) => {
    app.locals.data.push(req.body)
    res.status(201).json({ message: 'success' })
})

module.exports = app