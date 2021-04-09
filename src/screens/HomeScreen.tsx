import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button, ActivityIndicator, Dimensions } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { styles } from '../styles/appTheme';
import { CardMovie } from '../components/CardMovie';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const {nowPlaying, isLoading, popular, topRated, upComing} = useMovies();
    const {top} = useSafeAreaInsets();
    if( isLoading ){
        return (
            <View style={styles.loading}>
                <ActivityIndicator color='red' size={100}/>
            </View>
        )
    }

    return (
    <ScrollView>
        <View style={{marginTop: top + 20}}>
            <View style={styles.viewCarousel}>
                
                <Carousel 
                    data={nowPlaying!}
                    renderItem= { ({item}:any) => <CardMovie movie={item} />}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    inactiveSlideOpacity={0.5}
                />

            </View>

            <HorizontalSlider title='Populares' films={popular!} />
            <HorizontalSlider title='Mejor Valoradas' films={topRated!} />
            <HorizontalSlider title='Estrenos' films={upComing!} />
            
        </View>
    </ScrollView>
        
    )
}
