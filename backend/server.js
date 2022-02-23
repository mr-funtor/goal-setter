const express= require('express');
const dotenv= require('dotenv').config();
const {errorHandler}=require('./middleware/errorMiddleware');
const app= express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
const goalRoutes= require('./routes/goalRoutes');
app.use('/api/goals', goalRoutes);

app.use(errorHandler)

app.listen(port,()=>console.log(`server started at port ${port}`))