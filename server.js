const express = require('express')
const app = express()

app.get('/',(req,resp)=>{
    // resp.send("Hello , I am Joy. Nice to meet you")
    resp.sendFile('public/index.html',{root : __dirname})
});

app.listen(8080,'0.0.0.0',()=>{
    console.log("Server started at port 8080")
})