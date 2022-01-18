const express = require('express')
const dotenv = require('dotenv')
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyparser =require('body-parser')

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
app.set('view engine', 'ejs')

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/css', express.static(path.resolve(__dirname,'assets/css')))
app.use('/img', express.static(path.resolve(__dirname,'assets/img')))
app.use('/js', express.static(path.resolve(__dirname,'assets/js')))


app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/adduser', (req, res)=>{
    res.render('add_user')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT }`) 
})