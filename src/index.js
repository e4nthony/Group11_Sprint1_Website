//----------- Site -----------
const express = require('express')
const app     = express()
const port    = process.env.PORT || 4103
//---
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('public', path.join(__dirname, 'Public'))
//---
app.engine('.html', require('ejs').__express)
app.use(express.static(path.join(__dirname, 'Public')))
app.set('view engine', 'html')


//----------- MongoDB -----------
const MongoClient = require('mongodb').MongoClient;
//
//
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    // const collection = client.db("test").collection("devices");
    // perform actions on the collection object

    client.close();
});


//----------- Redirections -----------

// Landing Page | Home
app.get('/', function (req, res) {
    res.status(200).render('index')
})
app.get('/login', (req, res) => {
    res.send('this is login/register page ( sign in / sign up)')
})

app.get('/profile', (req, res) => {
        //todo: view different pages to doctor and to simple user
    res.send('this is Profile page')
})

app.get('/about_doctor', (req, res) => {
    res.status(200).render('about_doctor_page')
})

app.get('/site_map', (req, res) => {
    res.send('this is Site Map page')
})

app.get('/login', (req, res) => {
    res.send('this is login page')
})



app.listen(port, () => {
    console.log(`server is up and running at: http://127.0.0.1:${port}`)
    console.log(`http://127.0.0.1:${port}/`)
})
