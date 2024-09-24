const express= require('express')
const mongoose=require('mongoose')
const Product=require('./models/product.model')
const app = express()
const productRoute=require('./routes/product.routes.js')


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//routes

app.use('/api/products',productRoute)



app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>')
})









//update a product



//delete a product



mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

