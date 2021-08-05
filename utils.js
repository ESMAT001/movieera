module.exports = {
    apiUrl: "https://api-movieera.herokuapp.com/v1",
    imageUrl: 'https://api-movieera.herokuapp.com/v1/image/',
    placeholderImgUrl: 'https://api-movieera.herokuapp.com/v1/image/placeholder',
    trailerImgUrl: (id) => {
        return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    }
}