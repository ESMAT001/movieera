export const callApi = async function (url, options = {
    headers: {
        origin:"https://movieera.esmat@001.com"
    },    
}) {
    try {
        let data = await fetch(url, options)
        data = await data.json();
        return [data, null]
    } catch (err) {
        return [null, err.message]
    }
}