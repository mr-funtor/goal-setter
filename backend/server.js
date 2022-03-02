const express= require('express');
const colors=require('colors');
const dotenv= require('dotenv').config();
const {errorHandler}=require('./middleware/errorMiddleware');
const connectDB=require('./config/db');

connectDB();

const app= express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
const goalRoutes= require('./routes/goalRoutes');
const userRoutes= require('./routes/userRoutes');
app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler)

app.listen(port,()=>console.log(`server started at port ${port}`))