module.exports = {
    websiteUrl: "https://www.movieera.net/",
    apiUrl: "https://api-movieera.herokuapp.com/v1",
    // apiUrl: "https://sky0walker.herokuapp.com/v1",
    createMovieNameForUrl: function (movieId, movieName) {
        return movieId + '-' + movieName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '-').toLowerCase()
    },
    imageUrl: (imgPath) => {

        if (/image[.]tmdb[.]org/.test(imgPath)) {
            // return 'https://api-movieera.herokuapp.com/v1/image/original/' + imgPath.split('/').slice(-1)[0]
            // return 'https://sky0walker.herokuapp.com/v1/image/original/' + imgPath.split('/').slice(-1)[0]
            return 'https://image.tmdb.org/t/p/w500/' + imgPath.split('/').slice(-1)[0]
        }

        if (!imgPath) return "";

        if (imgPath[0] !== "/") {
            imgPath = "/" + imgPath;
        }
        return 'https://image.tmdb.org/t/p/w500' + imgPath;
        // return 'https://sky0walker.herokuapp.com/v1/image/original' + imgPath;
        // return 'https://api-movieera.herokuapp.com/v1/image/original' + imgPath
    },
    placeholderImgUrl: (imgPath) => {
        if (!imgPath) return "";

        if (imgPath[0] !== "/") {
            imgPath = "/" + imgPath;
        }
        return 'https://image.tmdb.org/t/p/w500' + imgPath;
        // return 'https://sky0walker.herokuapp.com/v1/image/placeholder' + imgPath;
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
    },
    bannedMedia: [1399, 90521, 63174,622082]
}