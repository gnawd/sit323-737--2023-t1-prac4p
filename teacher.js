const express= require("express");
const res = require("express/lib/response");
const app= express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('Simple calculator')
  })

const add= (n1,n2) => {
    return n1+n2;
}
app.get("/add/:num1/:num2", (req,res)=>{
    try{
    const n1= parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) {
        logger.error("n1 is incorrectly defined");
        throw new Error("n1 incorrectly defined");
    }
    if(isNaN(n2)) {
        logger.error("n2 is incorrectly defined");
        throw new Error("n2 incorrectly defined");
    }
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    logger.info('Parameters '+n1+' and '+n2+' received for addition');
    const result = (n1 + n2).toString;
    res.send(result); 
    } 
    
    catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});
const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port " +port);
})