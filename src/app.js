const express = require('express');
const app = express();
const PORT = 3000
app.listen(PORT,()=>{console.log(`server live at http://localhost:${PORT}`)});

app.get('/',(req,res,next)=>{
    res.send("hiii")
    console.log("HIII");
    
})
