const mongoose=require('mongoose');

mongoose
  .connect('mongodb+srv://samarth:Password@football.otvumur.mongodb.net/')
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));

