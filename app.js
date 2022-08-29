const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.listen(process.env.PORT || 3000, (req, res)=>{
    console.log('listening at localhost:3000')
})