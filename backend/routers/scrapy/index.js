const scrapyJS = require('./scrapy')
const got = require("got")
const fs = require('fs')
const metaData = require('../../utils')
const { response } = require('express')

const baseURL = ''
const firstPage = 819
const lastPage = 1395


function movieDataScraper(db) {
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



    function checkIfTwoMediaIsSame(media1, media2) {
        let same = true
        for (const key in media2) {
            if (Object.hasOwnProperty.call(media2, key) && Object.hasOwnProperty.call(media1, key)) {
                //check if the two objects are array and their length and values are the same
                if (Array.isArray(media2[key]) && Array.isArray(media1[key])) {
                    if (media2[key].length !== media1[key].length) {
                        same = false
                    } else {
                        for (let i = 0; i < media2[key].length; i++) {
                            const subObj1 = media1[key][i];
                            const subObj2 = media2[key][i];
                            let elements1 = [];
                            let elements2 = [];
                            for (const subKey1 in subObj1) {
                                if (subObj1.hasOwnProperty.call(subObj1, subKey1)) {
                                    elements1.push(subObj1[subKey1]);
                                }
                            }
                            for (const subKey2 in subObj2) {
                                if (subObj2.hasOwnProperty.call(subObj2, subKey2)) {
                                    elements2.push(subObj2[subKey2]);
                                }
                            }

                            if (elements1.length !== elements2.length) {
                                same = false
                                break;
                            } else {
                                for (let index = 0; index < elements2.length; index++) {
                                    if (elements1[index] !== elements2[index]) {
                                        same = false
                                        break;
                                    }
                                }
                            }

                        }
                    }
                } else {
                    //check if the media1 and medi2 objects are undefined or null and change same to false
                    if (media2[key] === undefined || media2[key] === null && media1[key] !== undefined || media1[key] !== null) {
                        same = false
                    } else if (media1[key] === undefined || media1[key] === null && media2[key] !== undefined || media2[key] !== null) {
                        same = false
                    }
                }
            } else {
                same = false
            }
        }
        return same;
    }

    async function insertDataToDb({ download_links }, id) {
        const responseData = await got(metaData.getMovieDetailsURL(id)).json()
        if (responseData.id !== id) return;
        responseData.download_links = download_links
        //insert response data to db
        await db.collection("movie").insertOne(responseData)
        console.log('inserted')
        console.log(responseData)
    }

    async function search(searchText) {
        const response = await spider.search(searchText)
        if (!response.data) {
            response.data = null
            return response
        }
        const movieId = parseInt(response.id)
        const dataFromDb = await db.collection("movie").findOne({ id: movieId });
        if (dataFromDb) {

            const { download_links: downloadLinksFromDbData } = dataFromDb
            const { download_links: downloadLinksFromSpiderData } = response.data
            //insert dataFromDb to db if download_links are different
            if (!checkIfTwoMediaIsSame(downloadLinksFromDbData, downloadLinksFromSpiderData)) {
                console.log('download links are different')
                await insertDataToDb(response, movieId)
            }

        } else {
            console.log('not found in db')
            await insertDataToDb(response.data, movieId)
        }

        return response
    }

    return { search, insertDataToDb }
}

async function scrapeDataInBackground(db, shouldReturn=false) {

    const dbData = await db.collection("meta_data").findOne({ name: "scrapy" })
    let shouldScrapeData = false;
    if (dbData) {
        console.log('updating old db data')
        const lastUpdated = new Date(dbData.last_updated)
        lastUpdated.setDate(lastUpdated.getDate() + 1)
        if (lastUpdated < new Date()) {
            shouldScrapeData = true
            let date = new Date()
            date.setDate(date.getDate() + 1)
            date = date.toUTCString()
            await db.collection("meta_data").updateOne({
                name: 'scrapy',
            }, {
                $set: { last_updated: date }
            })
        };

    } else {
        console.log('creating new data in db')
        let date = new Date()
        date.setDate(date.getDate() + 1)
        date = date.toUTCString()
        await db.collection("meta_data").insertOne({
            name: 'scrapy',
            last_updated: date
        })
        shouldScrapeData = true
    }


    if (shouldScrapeData) {
        console.log('scrapping data started')
        const totalPgesToScrape = 3
        const { search } = movieDataScraper(db)
        let foundData = []
        for (let page = 1; page <= totalPgesToScrape; page++) {

            const { results } = await got(metaData.getTrendingURL(page)).json()

            for (let index = 0; index < results.length; index++) {
                const movieName = results[index].original_title
                const movieId = results[index].id
                const movieDate = new Date(results[index].release_date).getFullYear()
                const returnData = await search(`${3} ${movieId} ${movieName} ${movieDate}`)
                if (returnData.data && shouldReturn) {
                    foundData.push(returnData.data)
                }
            }


        }
        console.log('scrapping data finished')
        if (shouldReturn) {
            return foundData
        }
    }else{
        console.log('waiting for perfect time to scrape using data from db')
    }



}




module.exports = scrapeDataInBackground









// async function insert({ id, data, fromSite }) {
    //     id = parseInt(id)
    //     console.log(id, data.movie_name, fromSite)
    //     fs.appendFileSync('./foundData.txt', id + " " + data.movie_name + " " + fromSite + "\n")
    //     if (fromSite) db.collection("movies").insertOne(data);
    //     if (await db.collection("movie").findOne({ id })) return;
    //     let movieData = await db.collection("tmdb").findOne({ id })


    //     if (!movieData) return;

    //     movieData.download_links = data.download_links
    //     const imgPath = 'https://image.tmdb.org/t/p/w500'
    //     movieData.backdrop_path = imgPath + movieData.backdrop_path
    //     movieData.poster_path = imgPath + movieData.poster_path
    //     await db.collection("movie").insertOne(movieData)
    //     console.log(id, data.movie_name, 'inserted')
    // }




        // spider.readFile('notFoundBase.txt', async function (line) {
        //     const data = await spider.search(line, db)
        //     // console.log(data)
        //     if (data.data) await insert(data);
        // })

        // let tempData = await spider.search("3 529203 City of Lies 2018")
        // console.log(tempData)

        //         // spider.crawl()

        // spider.crawlSinglePage("https://www.film2movie.asia/97001/%d8%af%d8%a7%d9%86%d9%84%d9%88%d8%af-%d8%b3%d8%b1%db%8c%d8%a7%d9%84-zack-snyders-justice-league/")















