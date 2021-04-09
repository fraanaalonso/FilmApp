import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../styles/appTheme';

interface Props{
    movie: Movie;
    height?: number;
    width?: number;
}


export const CardMovie = ({ movie, height = 420, width=300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={ () => navigation.navigate('DetailScreen', movie)}
        >
            <View style={{...styles.viewCard, width: width, height: height}}>
                <Image 
                    source={{
                        uri
                    }}
                    style={styles.card}
                />
            </View>
        </TouchableOpacity>
        
    )
}
