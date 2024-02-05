const express = require('express')

const app = express()
// TODO
app.use(express.static('public'));

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
    const accountants = app.locals.data.filter(employee => employee.job === 'accountant');
    // res.status(200).json(app.locals.data)
    res.status(200).json(accountants)
})

module.exports = app