import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import If from '../util-comp/If'

function Resultado(props) {
    const styles = StyleSheet.create({
        box: {
            backgroundColor: 'lightgray',
            width: 350,
            alignSelf: 'center',
            marginTop: 30,
            padding: 10
        },
        Texto:{
            textAlign: 'center',
            fontSize: 15
        }
    })

    return (
        <View style={styles.box}>
            <If test={props.nome && props.email && props.cpf && props.telefone && props.dtnasc && props.submit == true}>
                <Text style={styles.Texto}>Nome: {props.nome}</Text>
                <Text style={styles.Texto}>Email: {props.email}</Text>
                <Text style={styles.Texto}>CPF: {props.cpf}</Text>
                <Text style={styles.Texto}>Telefone: {props.telefone}</Text>
                <Text style={styles.Texto}>Data de Nascimento: {props.dtnasc}</Text>
            </If>
            <If test={!props.nome || !props.email || !props.cpf || !props.telefone || !props.dtnasc || props.submit == false}>
                <Text style={styles.Texto}>Preencha o formulário para ver os dados</Text>
            </If>
        </View>
    )
}

export default Resultado