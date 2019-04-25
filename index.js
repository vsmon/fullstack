const express = require('express')
const app = express()

const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.render('Home')
})


app.listen(port, (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Servidor funcionando!!!')
    }
})