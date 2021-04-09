import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { styles } from '../styles/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter'
import { CardCast } from './CardCast';

interface Props {
    movieFull: MovieFull;
    cast: Cast;
}

export const MovieDetails = ({ movieFull, cast}: Props) => {
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Icon 
                    name='star-outline'
                    color= 'grey'
                    size={16}
                />
                {/**Rating */}
                <Text>
                    {movieFull.vote_average}
                </Text>
                {/**Generos */}
                <Text style={{marginLeft: 5}}>
                    - {movieFull.genres.map( genre => genre.name).join(',')}
                </Text>
            </View>
            

            {/**Historia */}

            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                Historia
            </Text>

            <Text style={{fontSize: 16}}>
                {movieFull.overview}}
            </Text>

            {/**Presupuesto */}

            <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                Presupuesto
            </Text>

            <Text style={{fontSize: 18}}>
               {currencyFormatter.format(movieFull.budget, {code: 'USD'})} 
            </Text>

            <View style={{marginTop: 10, marginBottom: 100}}>
                <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
                    Actores
                </Text>

                <FlatList 
                    data={ cast }
                    keyExtractor={ item => item.id.toString()}
                    horizontal={true}
                    renderItem={({item}) => <CardCast actor={ item } />}
                    showsHorizontalScrollIndicator={ false }
                    style={{marginTop: 10, height: 70}}
                />
            </View>
        </View>

        
    )
}
