const serverSetup=require('./server');
const PORT=process.env.PORT || 4000;
serverSetup().listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
});