const metaData = require('../../utils')
const got = require('got');
const { projectionFields } = metaData

const retryLimit = 4
const timeOutLimit = 20 * 1000



async function apiCallForIds(movieCount, db) {
    let page = 1
    const movieIds = []
    do {
        let data = await got(metaData.getTrendingURL(page)).json()
        const results = data.results
        for (let index = 0; index < results.length; index++) {
            const id = results[index].id
            let movieDbData = await db.collection('movie').findOne({ id })
            if (movieDbData) movieIds.push(id)

            if (movieIds.length >= movieCount) return movieIds;
        }
        page++
    } while (movieIds.length < movieCount);
}

async function getIds(movieCount, db) {

    const dbData = await db.collection("meta_data").findOne({ name: "trending" })
    let shouldUpdateData = false;
    if (dbData) {
        const lastUpdated = new Date(dbData.last_updated)
        lastUpdated.setDate(lastUpdated.getDate() + 1)

        if (lastUpdated < new Date()) shouldUpdateData = true;

    } else {
        let date = new Date()
        date.setDate(date.getDate() + 1)
        date = date.toUTCString()
        await db.collection("meta_data").insertOne({
            name: 'trending',
            last_updated: date
        })
        shouldUpdateData = true
    }

    if (shouldUpdateData) {
        console.log('updating db for new trending data')
        const movieIds = await apiCallForIds(movieCount, db)

        let date = new Date()
        date.setDate(date.getDate() + 1)
        date = date.toUTCString()

        await db.collection("meta_data").updateOne({
            name: 'trending'
        }, {
            $set: { movieIds, last_updated: date }
        })
        return movieIds;

    } else {
        const { movieIds } = await db.collection("meta_data").findOne({ name: "trending" })
        return movieIds
    }
}
module.exports = async function fetchData(db) {
    const movieCount = 18;
    const movieIds = await getIds(movieCount, db)
    const movieData = await db.collection("movie").find({
        $and: [{
            'id': { $in: movieIds }
        }
            ,
        {
            adult: false
        }]
    }, {
        projection: projectionFields
    }).toArray()
    return movieData
}