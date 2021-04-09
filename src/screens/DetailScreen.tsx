import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, Dimensions, Image, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/appTheme';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons'
const {height} = Dimensions.get('screen');

interface Props extends StackScreenProps <RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ({route, navigation}:Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const {isLoading, cast, movieFull } = useMovieDetail(movie.id);
    

    return (

        <ScrollView>
            <View style={{width: '100%', height: height * 0.7}}>
                <Image 
                        source={{
                            uri
                        }}
                        style={styles.posterImage}
                    />
            </View>

            <View style={styles.viewTextCardDetail}>
                <Text style={{...styles.subTitle, fontSize: 16, opacity: 0.8}}>
                    {movie.original_title}
                </Text>
                <Text style={{...styles.subTitle}}>
                    {movie.title}
                </Text>
            </View>

            <View style={{...styles.viewTextCardDetail, marginTop: 20}}>
                {
                    isLoading
                    ?
                    <ActivityIndicator size={ 35 } color='red' style={{marginTop: 20}}/>
                    :
                    <MovieDetails movieFull={ movieFull! } cast={ cast } />
                }
                
            </View>

            <View style={styles.backButton}>
            <TouchableOpacity
                onPress={ () => navigation.goBack() }
            >   
                <Icon 
                    color='white'
                    name='arrow-back-outline'
                    size={30}
                    
                />
            </TouchableOpacity>
            </View>
            
        </ScrollView>
        
    )
}
