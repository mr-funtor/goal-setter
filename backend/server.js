const express= require('express');
const dotenv= require('dotenv').config();
const app= express();
const port = process.env.PORT || 5000;

console.log(process.env.PORT);

app.listen(port,()=>console.log(`server started at port ${port}`))