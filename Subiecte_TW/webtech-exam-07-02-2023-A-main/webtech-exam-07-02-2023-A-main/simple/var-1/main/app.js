const express = require('express')
const app = express()

app.use(express.static('public')) // Adaugă suport pentru conținutul static

app.get('/cars', (req, res) => {
    let filter = req.query.filter
    const data = [{
        name: 'a',
        color: 'red'
    }, {
        name: 'b',
        color: 'blue'
    }]

    if (!filter) {
        res.status(200).json(data)
    } else {
        const filteredData = data.filter((e) => e.color === filter)
        res.status(200).json(filteredData)
    }
})

module.exports=app