import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}


export const useMovieDetail = ( movieId: Number) => {

    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetail = async() => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
        
        const [ movieDetailResp, castResponse] = await Promise.all([ movieDetailsPromise, castPromise] );
    
        setstate({
            isLoading: false,
            movieFull: movieDetailResp.data,
            cast: castResponse.data.cast

        })
    }

    useEffect(() => {
        getMovieDetail()
    });


    return {
        ...state
    }
}
