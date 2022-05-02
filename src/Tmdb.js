/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
const API_KEY = 'api_key=2c75a92f0728edfe01b005245156ec77';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originals da netflix
- recomendados (trending)
- em alta (top rated)
- ação
-comédia
-terror
-romance
-documentarios
*/

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}language=pt-BR&${API_KEY}`);

    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_origin_country=US&`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch('/trending/all/week?')
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items:await basicFetch('/movie/top_rated?')
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/discover/movie?with_genres=28&')
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch('/discover/movie?with_genres=35&')
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch('/discover/movie?with_genres=27&')
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch('/discover/movie?with_genres=10749&')
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch('/discover/movie?with_genres=99&')
            }
        ]
    },


    getMovieInfo: async (movieId, type) => {
            let info = {};

            if(movieId){
                switch(type){
                    case 'movie':
                        info = await basicFetch(`/movie/${movieId}?`);
                    break;
                    case 'tv':
                        info = await basicFetch(`/tv/${movieId}?`);
                    break;
                    default:
                        info = null;
                    break;
                }
            }

            return info;
    }


}
