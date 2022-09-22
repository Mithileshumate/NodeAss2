const express = require('express');
const app = express();
const port = 2000  || process.env.PORT;


app.get('/',(req,res)=>{
    res.send(`<h1>It is my Second Node.js Assignment</h1>`)
    res.end()
})

app.get('/api', (req,res)=>{
    res.send(`<h2>Here the page is inside api route</h2>`)
    res.end();
})

app.get('/main', (req,res)=>{
    res.send(`<h2>Here the page is inside main route</h2>`)
    res.end();
})


app.listen(port,()=>{
    console.log(`Connected to the ${port}`);
})

