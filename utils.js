module.exports = {
    apiUrl: "https://api-movieera.herokuapp.com/v1",
    imageUrl: (imgPath) => {
        if(!imagePath) return "";

        if (imgPath[0] !== "/") {
            imgPath = "/" + imgPath;
        }
        return 'https://api-movieera.herokuapp.com/v1/image/original' + imgPath;
    },
    placeholderImgUrl: (imgPath) => {
        if(!imagePath) return "";

        if (imgPath[0] !== "/") {
            imgPath = "/" + imgPath;
        }
        return 'https://api-movieera.herokuapp.com/v1/image/placeholder' + imgPath;
    },
    trailerImgUrl: (id) => {
        return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    }
}