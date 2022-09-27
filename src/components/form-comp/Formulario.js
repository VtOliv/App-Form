import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native'
import Resultado from './Resultado';
import { MaskedTextInput } from 'react-native-mask-text';

function Formulario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dtnasc, setDtnasc] = useState('');
    const [enviar, setEnviar] = useState(false);


    function logResults() {
        setEnviar(true)

        console.warn(nome)
        console.warn(email)
        console.warn(cpf)
        console.warn(telefone)
        console.warn(dtnasc)
    }

    return (
        <View>
            <TextInput style={Styles.input}
                placeholder='Digite seu Nome'
                value={nome}
                onChangeText={value => {
                    setNome(value)
                }} />

            <TextInput style={Styles.input}
                placeholder='Digite seu Email'
                value={email}
                onChangeText={value => {
                    setEmail(value)
                }} />

            <MaskedTextInput style={Styles.input}
                mask="999.999.999-99"
                placeholder='Digite seu CPF'
                value={cpf}
                keyboardType='numeric'
                onChangeText={value => {
                    setCpf(value)
                }} />

            <MaskedTextInput style={Styles.input}
                mask="(99)9 9999-9999"
                keyboardType='numeric'
                placeholder='Digite seu Telefone'
                value={telefone}
                onChangeText={value => {
                    setTelefone(value)
                }} />

            <MaskedTextInput style={Styles.input}
                mask="99/99/9999"
                keyboardType='numeric'
                placeholder='Digite sua Data de nascimento'
                value={dtnasc}
                onChangeText={value => {
                    setDtnasc(value)
                }} />
            <TouchableOpacity style={Styles.btn} key={"send"} onPress={() => logResults()} >
                <Text style={Styles.text}>Enviar</Text>
            </TouchableOpacity>

            <Resultado nome={nome} email={email} cpf={cpf} telefone={telefone} dtnasc={dtnasc} submit={enviar}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    input: {
        marginBottom: 5,
        marginTop: 4,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginEnd: 10,
        marginStart: 10
    },
    btn: {
        width: 200,
        padding: 5,
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        marginBottom: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }


    
})

export default Formulario