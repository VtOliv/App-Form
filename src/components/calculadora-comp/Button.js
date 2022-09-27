import React from 'react';
import { Text, View, StyleSheet, 
    TouchableOpacity } from 'react-native'

function ButtonCalc(props) {

    return (
        <View style={[styles.Container]}>
            <TouchableOpacity style={[styles.button]} onPress={() => props.func(props.label)}>
                <Text style={[styles.text]}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 90,
        minWidth: 97,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default ButtonCalc