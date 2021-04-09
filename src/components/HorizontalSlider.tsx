import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../styles/appTheme';
import { CardMovie } from './CardMovie';


interface Props {
    title?: string;
    films: Movie[];
}
export const HorizontalSlider = ({title, films}: Props) => {
    return (
        <View style={styles.viewList}>
                {
                    title && <Text style={{...styles.viewTextPopulares, marginLeft: 10}}>{title}</Text>
                }
                <FlatList 
                    data= {films}
                    renderItem= { ({item}:any) =>( 
                        <CardMovie movie={item} width={140} height={200}/>
                    )}
                    keyExtractor={ (item) =>  item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={ false }
                />
                
        </View>
    )
}
