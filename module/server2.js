const HTTP = require("http")
let c=require("./add")
const port = 1979
server1 = HTTP.createServer((req,res)=>{
    res.end("let a=2; b=3 c=a+bmodule.exports=c")
});
server1.listen(port,()=>{
    console.log("Server is listening on port " + port)
})
