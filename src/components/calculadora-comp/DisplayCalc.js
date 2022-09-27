import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

function Display(props) {

    return (
        <View style={[styles.display]}>
            <Text style={styles.History}>{props.history}</Text>
            <Text style={styles.Text}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: 300,
        backgroundColor: 'lightgreen'
    },
    Text : {
        color: '#000',
        fontSize: 60,
        fontWeight: 'bold',
        padding: 30,
        paddingTop: 0
    },
    History : {
        color: 'gray',
        fontSize: 30,
        fontWeight: 'bold',
        paddingRight: 30
    }
})

export default Display