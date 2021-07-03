const scrapyJS = require('./scrapy')
const fs = require('fs')


const baseURL = ''
const firstPage = 819
const lastPage = 1395

module.exports = async function movieDataScraper(db, info) {
    const spider = scrapyJS(baseURL, firstPage, lastPage, {
        nameSelector: 'div.content > div > p',
        downloadLinkSelector: "div.content > *",
        mainPageLinkSelector: 'div.title > h2 > a',
        notFoundSelector: "div.box > div.title",
        maxThreads: 8
    })

    spider.on('finished', () => {
        console.log('crawling finished')
    })

    spider.on("error", (error) => {
        console.log(error)

        if (error.url) fs.appendFileSync('./newError.txt', error.url + "\n");
    })

    spider.on('crawled', (data) => {
        console.log('from listener')
        console.log(data)
        // db.collection("movies").insertOne(data)
        //     .then(result => console.log('inserted!', result.ops))
        //     .catch(error => console.log('error on insertion :', error))
    })


    async function insert({ id, data, fromSite }) {
        id = parseInt(id)
        console.log(id, data.movie_name, fromSite)
        fs.appendFileSync('./foundData.txt', id + " " + data.movie_name + " " + fromSite + "\n")
        if (fromSite) db.collection("movies").insertOne(data);
        if (await db.collection("movie").findOne({ id })) return;
        let movieData = await db.collection("tmdb").findOne({ id })


        if (!movieData) return;

        movieData.download_links = data.download_links
        const imgPath = 'https://image.tmdb.org/t/p/w500'
        movieData.backdrop_path = imgPath + movieData.backdrop_path
        movieData.poster_path = imgPath + movieData.poster_path
        await db.collection("movie").insertOne(movieData)
        console.log(id, data.movie_name, 'inserted')
    }

    return await spider.search("3 522931 Hitman's Wife's Bodyguard 2021")
}














        // spider.readFile('notFoundBase.txt', async function (line) {
        //     const data = await spider.search(line, db)
        //     // console.log(data)
        //     if (data.data) await insert(data);
        // })

        // let tempData = await spider.search("3 529203 City of Lies 2018")
        // console.log(tempData)

        //         // spider.crawl()

        // spider.crawlSinglePage("https://www.film2movie.asia/97001/%d8%af%d8%a7%d9%86%d9%84%d9%88%d8%af-%d8%b3%d8%b1%db%8c%d8%a7%d9%84-zack-snyders-justice-league/")















