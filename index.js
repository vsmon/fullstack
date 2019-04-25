const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('ok')
})

app.get('/Home', (req, res)=>{
    res.render('Home')
})

app.listen(port, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Servidor funcionando!!!')
    }
})