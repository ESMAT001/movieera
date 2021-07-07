const express = require('express');
const got = require('got');
const connectToDb = require('../db')
const fetchData = require('./functions/trending')
const fetchMoviesRouteData = require('./functions/movies')
const fetchSingleMovieData = require('./functions/movie')
//test

const scrapeDataInBackground = require('./scrapy/index')

//test

// async function fn(){
//     for (let index = 0; index < 100; index++) {
//          got('https://camo.githubusercontent.com/736b987717afaaff5fb4a6380aee9f8e1467815d2044ed63dde61ca8e158bd89/68747470733a2f2f76697369746f722d62616467652e676c697463682e6d652f62616467653f706167655f69643d45534d4154303031')
//     }
// }
// fn()


const dbName = "media"

const router = express.Router();

router.use(express.json())


router.get('/trending', async function (req, res) {
    const db = await connectToDb(dbName)
    res.send(await fetchData(db))
})

router.get('/movies', async (req, res) => {
    let { page = 1 } = req.query
    if (!page || /[a-zA-Z./()$-]/g.test(page)) return res.status(400).send("Bad request!");
    page = parseInt(page)
    if (page < 1) return res.status(400).send("bad request")

    const db = await connectToDb(dbName)
    const data = await fetchMoviesRouteData(db, page)

    res.send(data)
})

router.get('/movie', async (req, res) => {

    let { id } = req.query
    if (!id || /[a-zA-Z./()$-]/g.test(id)) return res.status(400).send("Bad request!")
    id = parseInt(id)
    const db = await connectToDb(dbName)
    const data = await fetchSingleMovieData(db, id)
    if (!data) return res.status(404).send("Movie not found!")
    res.send(data)
})

router.get('/test', async (req, res) => {
    const db = await connectToDb(dbName)

    res.send(await scrapeDataInBackground(db))
})



module.exports = router