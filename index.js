const express = require('express')
const app = express()
app.set('view engine', 'hbs');

const port = 3000;
app.use(express.static('public'))
var hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', function(req, res){
    res.render('home')
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



app.listen(3000)