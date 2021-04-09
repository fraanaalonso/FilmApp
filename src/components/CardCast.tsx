import React from 'react'
import { Image, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { styles } from '../styles/appTheme';


interface Props {
    actor: Cast
}
export const CardCast = ({actor}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.cardDetailActor}>

            {
                actor.profile_path &&  (<Image 
                                            source={{uri}}
                                            style={{width: 50, height: 50, borderRadius: 10}}
                                        />)
            }

           
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                    {actor.name}
                </Text>

                <Text style={{ fontSize: 16, fontWeight: 'grey'}}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}
