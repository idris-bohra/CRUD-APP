const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
var cors = require('cors');
const User = require('./Schema/userSchema');
const { response } = require('express');

app.use(cors());

app.use(bodyparser.json());


let dbUrl = ' mongodb://127.0.0.1:27017/Mern_stack'

//'mongodb://idrisbohra:idris786@cluster0-shard-00-00.wqdmn.mongodb.net:27017,cluster0-shard-00-01.wqdmn.mongodb.net:27017,cluster0-shard-00-02.wqdmn.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ymhd53-shard-0&authSource=admin&retryWrites=true&w=majority';

async function run()
{
    try{
        
        await mongoose.connect(dbUrl,{
            keepAlive: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
          }, () => { 
            console.log('connected to database myDb ;)') 
        })
        
    } catch(err)
    {
        console.log(err);
    }

}

run();

app.get('/' , async (req ,res)=>{

    console.log("get is running")
    try{
        let allusers = await User.find();
        res.json(allusers)
    }
    catch(err)
    {
        console.log(err)
    }
})

app.post('/add' , async (req ,res)=>{
    const { name, age , user_name } = req.body;

    console.log(name , age , user_name);
    res.json(req.body)

   let putting = async()=>{

    try
    {
       await User.create({name : `${name}` , age : age , user_name : `${user_name}`});
      
    }
    catch(err)
    {
        console.log(err);
    }
   }

   putting();

})

app.put('/:id' , (req ,res)=>{

    
    console.log(req.params.id);
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, req.body, (err , data)=>{
      if(err)
      {
        res.send(err);
      }
      else
      {
        console.log("Put request is working fine")

      } 
 });

      
});

app.delete('/:id' , (req ,res)=>{

    console.log("deleted")

    console.log(req.params)

    User.deleteOne({_id : `${req.params.id}`}, (err , data)=>{
      if(err)
      {
        res.send(err);
      }
      else{
        res.send(data);
      }
    })
});


app.listen(8000 , ()=>{
    console.log("connected to server 8000")
})