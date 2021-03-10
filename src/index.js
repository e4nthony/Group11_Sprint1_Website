const express = require('express')
const port    = process.env.PORT || 5000
const app     = express()

console.log(process.env.PORT)
app.get('/', (req, res) => {
    res.send('Group 11 \n' +
        'Website Project \n\n' +
        'this is Home Test Page')
})

app.get('/profile', (req, res) => {
    res.send('this is Profile page')
})

app.get('/site_map', (req, res) => {
    res.send('this is Site Map page')
})


app.listen(port, ()=>{
    console.log(`server is up and running at: http://127.0.0.1:${port}`)
})