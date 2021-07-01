const express = require('express')
const next = require('next')

// const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()
        // server.use(bodyParser.json)
        server.get("/app",(req,res)=>res.send("from server"))
        server.get("*", (req, res) => handle(req, res))
        server.listen(3000, err => {
            if (err) throw err;
            console.log("server and app running on port 3000")
        })
    })