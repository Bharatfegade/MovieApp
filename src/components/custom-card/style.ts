import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    wrapperStyle: {
        height: 200, 
        width: 50, 
        marginRight: 8, 
        marginTop: 8
    },
    imageStyle: {
        height: '100%', 
        width: '100%', 
        opacity: 0.8
    },
    textWrapperStyle: {
        position: 'absolute', 
        height: 26, 
        width: '100%', 
        justifyContent: 'center', 
        bottom: 20, 
        paddingHorizontal: 8
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    ratingWrapperStyle: {
        position: 'absolute', 
        height: 20, 
        width: '100%', 
        justifyContent: 'center', 
        bottom: 0, 
        paddingHorizontal: 8
    },
    ratingTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    }
})

export default style;