const express = require('express');
const databaseFunction = require('./db/db.js');
const app = express();


const cors = require("cors");
const axios = require("axios");


const port = process.env.PORT | 3000;


////////////////
app.use(express.json());
app.use(cors({ origin: true }));
////////////
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r=axios.put('http://api.chatengine.io/users/',
        {
            username:username,
            secret:username,
            first_name:username
        },
        {
            headers:{"private-key":"44658f26-a840-48ab-9f90-f9dae4ad51f6"}
        })
        console.log("ChatEngine response:", r.data);
        return res.status(r.status).json(r.data);
        
    } catch (error) {
        return res.status(error.res.status).json(error.res.data);
        
    }

});
app.get('/', (req, res) => {

    res.send("helow dastag ");
})
databaseFunction();
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})




