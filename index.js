const express = require("express");
const server = express();
const port = process.env.PORT || 4000;
server.use(express.json())





server.get('/', (req,res)=> {
    res.status(200).json({message: "server testing..."})
})
server.listen(port, () => {
    console.log(`\n*** Listening on Port ${port} *****\n`)
})