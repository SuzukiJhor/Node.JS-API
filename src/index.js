const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send('ola eu sou o GOku')
})

app.listen(PORT, ()=>{
    console.log('app running')
})