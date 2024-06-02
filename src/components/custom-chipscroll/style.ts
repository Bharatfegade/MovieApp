import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    wrapperStyle: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    textStyle: {
        color: '#FFFFFF', 
        fontSize: 14, 
        fontWeight: '500'
    },
    renderWrapperStyle: {
        height: 40,
        paddingHorizontal: 16,
        marginRight: 4,
        justifyContent: 'center',
        borderRadius: 5,
        flex: 1,
    }
})

export default style;