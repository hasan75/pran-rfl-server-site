const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('PRAN_RFL SERVER SITE RUNNING')
})

app.listen(port, ()=>{
    console.log('Pran-RFL Server running on:',port);
})