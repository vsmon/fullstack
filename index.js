const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
    res.send('ok')
})

app.get('/Home', (req, res)=>{
    res.render('Home')
})

app.listen(3000, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Servidor funcionando!!!')
    }
})