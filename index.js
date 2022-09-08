const express = require('express')
const app = express()
app.set('view engine', 'hbs');

require('dotenv').config();
const port = process.env.PORT;




app.use(express.static('public'))
var hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', function(req, res){
    res.render('home', {
        titulo: "Topicos",
        nombre: "Yessid"
    })
})
app.get('/generic', function(req, res){
    res.render('generic', {
        titulo: "Topicos",
        nombre: "Yessid"
    })
})
app.get('/elements', function(req, res){
    res.render('elements', {
        titulo: "Topicos",
        nombre: "Yessid"
    })
})




// app.get('/', (req, res) => {
//     res.render('home', {
//         nombre: 'Acosta Acosta',
//         titulo: 'Lorem Ipsum'
//     })
// })

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/elements.html');
})

app.get('/hola-mundo', function(req, res){
    res.send('Ruta nueva')
})


// app.get('*', function(req, res){
//     res.send('404 | Page no found')
// })

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/404.html')
})



app.listen(port)