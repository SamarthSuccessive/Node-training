const serverSetup=require('./server');
const PORT=process.env.PORT || 3000;
serverSetup().listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
});