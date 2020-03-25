const express = require('express');
     path = require('path');

cons app = express();

app.use(express.static('./dist/angular-tour-of-heroes'));

app.get('/*', (req,res)=>){

res.sendFile(path.join(_dirname,'/dist/angular-tour-of-heroes/index.html'));
    
});

app.listen(process.env.PORT || 8080, ()=>{
console.log('Server started');
});


