const express=require('express');
const app=express();
const Joi=require('joi');
const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  });

  app.use(express.json());

app.post('/login',(req,resp)=>{
    console.log("Received login request:", req.body);

    const {error,values}=userSchema.validate(req.body);
    if(error)
    {
        return resp.status(400).json({error:error.details[0].message});
    }
    else{
        console.log("You have successfully Logged in ");
        resp.send("Hi i am logged into the account successfully:");
    }
});


const PORT=4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  