
export const callApi = async function (url, options = {}) {
    try {
        let data = await fetch(url, options)
        data = await data.json();
        return [data, null]
    } catch (err) {
        return [null, err.message]
    }
}

export const getMediaLangTypeName = function (mediaType) {
    switch (mediaType) {
        case 'original_lang':
            return 'Original language'
        case 'persian_sub':
            return 'Persian subtitled'
        case 'dual_lang':
        case 'persian_lang':
            return 'Persian Language'
        case 'company':
            return 'Company'
        case 'character':
            return 'Character'
        default:
            return 'Unknown'
    }
}


export const createMovieSourceObjects = function (download_links) {
    if (typeof String.prototype.replaceAll == "undefined") {
        String.prototype.replaceAll = function (match, replace) {
            return this.replace(new RegExp(match, 'g'), () => replace);
        }
    }

    function extractMediaSize(quality) {
        quality = quality.replaceAll("F2M", "").replaceAll("x265", "").match(/\d+/g);
        if (quality !== null) quality = parseInt(quality[0]);
        return quality
    }

    let sources = {};
    for (const key in download_links) {
        if (Object.hasOwnProperty.call(download_links, key)) {
            if (key === "persian_sub") continue;
            const tempSources = []
            for (let index = 0; index < download_links[key].length; index++) {
                const element = download_links[key][index];
                tempSources.push({
                    src: element.downloadLinks,
                    type: "video/mp4",
                    size: extractMediaSize(element.quality),
                })
            }
            sources[key] = tempSources;
        }
    }
    return sources;
}