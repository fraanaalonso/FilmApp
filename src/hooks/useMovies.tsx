import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MoviesResponse, Movie } from '../interfaces/movieInterface';


interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upComing: Movie[];
}
export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true)
    const [filmsCine, setFilmsCine] = useState<Movie[]>([]);
    const [popularFilms, setPopularFilms] = useState<Movie[]>([])

    const getMovies = async() => {

        const nowPlayingResp = await movieDB.get<MoviesResponse>('/now_playing');
        const popularResp = await movieDB.get<MoviesResponse>('/popular');
        setFilmsCine(nowPlayingResp.data.results);
        setPopularFilms(popularResp.data.results);
        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])
    
    

    return {
        filmsCine,
        isLoading,
        popularFilms,
    }
}
