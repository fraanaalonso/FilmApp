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
    const [moviesState, setMoviesState] = useState<MoviesState>();

    const getMovies = async() => {

        const nowPlayingPromise = movieDB.get<MoviesResponse>('/now_playing')
        const popularPromise = movieDB.get<MoviesResponse>('/popular')
        const topRatedPromise = movieDB.get<MoviesResponse>('/top_rated')
        const upcomingPromise = movieDB.get<MoviesResponse>('/upcoming')

        const resp = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise ])

        setMoviesState({
            nowPlaying: resp[0].data.results ,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upComing: resp[3].data.results,
        })
        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])
    
    

    return {
        ...moviesState,
        isLoading,
    }
}
