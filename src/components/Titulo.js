import React from 'react';
import { Text, View, StyleSheet } from 'react-native'

function Titulo(props) {

    return (
        <View style={styles.Container}>
            <Text style={styles.Texto}>{props.principal}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
    },
    Texto: {
        textAlign: 'center',
        fontSize: 30
    }
})

export default Titulo