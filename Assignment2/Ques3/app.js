// Create a GET API that returns a mock list as a response.

// FileName - 

// app.js: This file will contain the main Express application code.

// mockData.js: This file will contain your mock data (an array, for instance).


const express=require('express');
const app=express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const arr=require('./mockData');


app.get('/list',(req,res)=>{
    res.send(arr);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});