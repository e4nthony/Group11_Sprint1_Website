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
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbAdmin:<password>@cluster0.iv839.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const uri = "mongodb+srv://dbadmin:9vtYvFjrGNPR6ab@cluster0.iv839.mongodb.net/sample_DB?retryWrites=true&w=majority";
// const uri = "mongodb+srv://Client:2mCrSY7jqpAojJ1K@Cluster0.iv839.mongodb.net/sample_DB?retryWrites=true&w=majority";
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//
//     client.close();
// });

const {MongoClient} = require('mongodb')

async function listDatabases(client){
    let databasesList = await client.db().admin().listDatabases()

    console.log("Databases:")
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

async function main() {
    const uri = "mongodb+srv://Client:2mCrSY7jqpAojJ1K@Cluster0.iv839.mongodb.net/sample_DB?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

    try {
        await client.connect()
        app.get('/login', function (req, res) {
            const { role } = req.user
            if (role == -1 || role == undefined) {
                return res.status(200).render('login')
            }
            alert('You are already logged in')
            return res.redirect('/')
        })
        app.post('/', function (req, res) {
            res.send('Got a POST request')
        })


        main().catch(console.error)

//----------- Redirections -----------

// Landing Page | Home
        app.get('/', function (req, res) {
            res.status(200).render('home')
        })

// Login/Registration Page | Sign in/up
        app.get('/login', (req, res) => {
            // res.send('this is login page')
            res.status(200).render('login')
        })

// Login/Registration Page | Sign in/up-doctor
        app.get('/doclogin', (req, res) => {
            res.status(200).render('doclogin')
        })

// Doctor's public profile page | about_doctor_page
        app.get('/about_doctor', (req, res) => {
            res.status(200).render('about_doctor_page')
        })

// Template Page |
        app.get('/inner-page', (req, res) => {
            res.status(200).render('inner-page')
        })

// Search | Search results
        app.get('/search', (req, res) => {
            res.status(200).render('search')
        })


//todo: view different pages to doctor and to simple user by same link,
//todo: for each user pages displays different depending on user id

// // Simple/Doctor user page | private profile page
// app.get('/profile', (req, res) => {
//
//     res.send('this is Profile page')
// })

// Simple_user_page | private profile page
        app.get('/profile_s', (req, res) => {
            res.status(200).render('simple_user_page')
        })

// Doctor_user_page | private profile page
        app.get('/profile_d', (req, res) => {
            res.status(200).render('doctor_user_page')
        })

        await listDatabases(client)

    } catch (e) {
        console.error(e)
    }
    finally {
        await client.close()
    }
}



app.listen(port, () => {
    console.log(`server is up and running at: http://127.0.0.1:${port}`)
    console.log(`http://127.0.0.1:${port}/`)
})