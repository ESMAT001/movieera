module.exports = {
    websiteUrl:"https://movieera.vercel.app/",
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
    },
    genresList: () => {
        return [
            {
                id: 28,
                name: "Action"
            },
            {
                id: 12,
                name: "Adventure"
            },
            {
                id: 16,
                name: "Animation"
            },
            {
                id: 35,
                name: "Comedy"
            },
            {
                id: 80,
                name: "Crime"
            },
            {
                id: 99,
                name: "Documentary"
            },
            {
                id: 18,
                name: "Drama"
            },
            {
                id: 10751,
                name: "Family"
            },
            {
                id: 14,
                name: "Fantasy"
            },
            {
                id: 36,
                name: "History"
            },
            {
                id: 27,
                name: "Horror"
            },
            {
                id: 10402,
                name: "Music"
            },
            {
                id: 9648,
                name: "Mystery"
            },
            {
                id: 10749,
                name: "Romance"
            },
            {
                id: 878,
                name: "Science Fiction"
            },
            {
                id: 10770,
                name: "TV Movie"
            },
            {
                id: 53,
                name: "Thriller"
            },
            {
                id: 10752,
                name: "War"
            },
            {
                id: 37,
                name: "Western"
            }];
    }
}