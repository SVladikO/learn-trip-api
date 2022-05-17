const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello bro')
})

app.listen(port, () => {
    console.log(`App is run on ${port}`)
})
//
// app.get('/user/:id', function (req, res) {
//     res.send('user ' + req.params.id)
// })


// 222
// var express = require('express')
//
// var app = express()
//
// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//
// app.post('/profile', function (req, res, next) {
//     console.log(req.body)
//     res.json(req.body)
// })