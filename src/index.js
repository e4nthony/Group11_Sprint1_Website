const express = require('express')
const app     = express()

const port    = process.env.PORT || 4103


console.log(process.env.PORT)

// let http = require('http');
//
// http.createServer( ( req, res) => {
//     let html = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//
//     <title> Website </title>
//     </head>
//     <body>
//
//     <h1>My First Heading</h1>
//
//     <p>My first paragraph.</p>
//
//     </body>
//     </html>
//     `;
//
//     res.end(html);
// });



// app.get('/', (req, res) => {
//     res.send('Group 11 ' +
//         'Website Project ' +
//         'this is Home Test Page')
// })

app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/home.html')
    // res.sendFile(__dirname + '/sample1.html')
    res.sendFile(__dirname + '/assets/Medilab/index.html')
})



app.get('/profile', (req, res) => {
    res.send('this is Profile page')
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