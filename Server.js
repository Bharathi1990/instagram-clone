const mongoose=require('mongoose');
const express= require('express');
const cors= require('cors');
const app=express();
require('dotenv').config();
app.use(cors())
 app.use(express.json());
//connecting to db
const dbConnect= process.env.DB_URI;
mongoose.connect(dbConnect);
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log('connected to DB successfully')
})
  const userRouter=require('./routes/Users')
  app.use('/Users',userRouter)

app.listen(8002,()=>{
    console.log('Server is Running...!!!')
})