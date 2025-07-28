const express = require('express');
const app = express();
const cors = require('cors');
const allroutes = require('./allRoutes');



//middleware routing
app.use(cors());
// app.use(express.json());

app.use('/api', allroutes);

app.use('/', async(req,res)=>{
    res.send("Hey!!");
});


// Start the server
app.listen(5000,()=>{
    console.log("Backend is running at port http://localhost:5000")
})