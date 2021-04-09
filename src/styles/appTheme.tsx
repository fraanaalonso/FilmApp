import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewCard: {
        width: 300,
        height: 420,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
    card: {
        flex: 1,
        borderRadius: 18,
        
        
    },
    viewCarousel: {
        height: 440,
    },
    viewList:{
        height: 260,
    },
    viewTextPopulares: {
        fontSize: 30,
        fontWeight: 'bold'
    }
    
    
});