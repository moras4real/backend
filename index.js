const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
const dotenv = require('dotenv');
dotenv.config()
require('./connection/mongoose.connection')

let PORT = process.env.PORT_NUMBER || 5500
let testModel = require('./models/user.model')

// let port = 5500


let details = [
    "go",
    {
        id:1,
        name:'Raj',
        age:20,
        city:"Chennai",
    },
    {
        id:2,
        name:'Raj',
        age:21,
        city:"Chennai",
    },
    {
        id:3,
        name:'Raj',
        age:22,
        city:"Chennai",
    },
    {
        id:4,
        name:'Raj',
        age:23,
        city:"Chennai",
    }
]

app.get('/',(req,res)=>{
    res.send('Hello World')    
})

app.get('/api',(req,res)=>{
    res.send(details);   
})

app.post('/signup',(req,res)=>{
    // res.send(req.body);  
    res.send("successfull")
    let test = new testModel(req.body);
    test.save()
    .then((result)=>{
        console.log("test submitted successfully");
        console.log(result);
        res.redirect("/") 
    }) 
    .catch((err)=>{
        console.log(err);        
    })  
})



app.listen(PORT,()=>{
    console.log(`Server is runnng on port ${PORT}`);    
})