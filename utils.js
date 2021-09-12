module.exports = {
    apiUrl: "https://api-movieera.herokuapp.com/v1",
    imageUrl: (imgPath) => {

        if (/image[.]tmdb[.]org/.test(imgPath)) {
            return 'https://api-movieera.herokuapp.com/v1/image/original/' + imgPath.split('/').slice(-1)[0]
        }

        if (!imgPath) return "";

        if (imgPath[0] !== "/") {
            imgPath = "/" + imgPath;
        }
        return 'https://api-movieera.herokuapp.com/v1/image/original' + imgPath;
    },
    placeholderImgUrl: (imgPath) => {
        if (!imgPath) return "";

        if (imgPath[0] !== "/") {
            imgPath = "/" + imgPath;
        }
        return 'https://api-movieera.herokuapp.com/v1/image/placeholder' + imgPath;
    },
    trailerImgUrl: (id) => {
        return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    }
}