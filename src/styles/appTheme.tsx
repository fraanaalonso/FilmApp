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
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 5,

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
        fontSize: 20,
        fontWeight: 'bold'
    },
    posterImage: {
        flex: 1,
    },
    viewTextCardDetail: {
        marginHorizontal: 20,
        marginTop: 20,

    },

    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        
    },

    cardDetailActor: {
        flexDirection: 'row', 
        marginTop: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
        borderRadius: 10,
        height: 50,
        marginRight: 20,
        paddingHorizontal: 10
    },
    actorInfo:{
        marginLeft: 10
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 50,
        left: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
    }
    
    
});