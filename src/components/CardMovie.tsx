import React from 'react'
import { Image, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../styles/appTheme';

interface Props{
    movie: Movie;
    height?: number;
    width?: number;
}


export const CardMovie = ({ movie, height = 420, width=300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <View style={{...styles.viewCard, width: width, height: height, marginHorizontal: 5}}>
            <Image 
                source={{
                    uri
                }}
                style={styles.card}
            />
        </View>
    )
}
