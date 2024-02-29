const baseURL = 'https://api.themoviedb.org/3'

const movies = '/movie'

const urls = {
    movies: {
        base: movies,
        movies_list:`${movies}/now_playing`,
        byId: (id: number): string => `${movies}/${id}`,
        images: (id: number): string => `${movies}/${id}/images`,
    },
}

export {
    baseURL,
    urls
}