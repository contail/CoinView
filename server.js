const express = require('express');
const app = express();
app.listen(9001);

app.get('/',(request,response)=>{
    response.send("hello")
})