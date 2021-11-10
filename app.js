const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
  

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})

const randstring = localStorage.getItem("randstring")

app.post('/urlmade', (req, res) => {

    localStorage.setItem("randstring", req.body.randstringval)
    const urlshort = `http://localhost:3000/${randstring}`
    res.send(`The url was made! Here is your URL: <a href="${urlshort}">${urlshort}</a>`)
})



app.get(`/${randstring}`, (req, res) => {
    res.sendFile(__dirname + '/views/urlsend.html')
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`)
})