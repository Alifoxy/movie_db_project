const baseURL = 'https://api.themoviedb.org/3'

const movie = '/movie'

const urls = {
    movie: {
        base: movie,
        movie_list: `${movie}/now_playing`,
        byId: (id: number): string => `${movie}/${id}`,
        images: (id: number): string => `${movie}/${id}/images`,
    },
}

export {
    baseURL,
    urls
}