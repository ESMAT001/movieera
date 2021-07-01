const express = require('express')
const next = require('next')
const mainRouter = require('./backend/index')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = 3000


app.prepare()
    .then(() => {
        const server = express()
        server.use("/api", mainRouter)
        server.get("*", (req, res) => handle(req, res))
        server.listen(port, err => {
            if (err) throw err;
            console.log("server and app running on port 3000")
        })
    })
    .catch(error => console.log(error))