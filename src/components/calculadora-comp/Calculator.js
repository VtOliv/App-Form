import React, { useState } from 'react';
import ButtonCalc from './Button';
import Display from './DisplayCalc';
import { View, StyleSheet } from 'react-native'


export default function Calculator() {

    const operations = [' ', '+', '-', '*', '/', '.', ' ', '%']
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const [number, setNumber] = useState([0, 0]);
    const [operation, setOperation] = useState("");
    const [position, setPosition] = useState(0);
    const [display, setDisplay] = useState(0);
    const [history, setHistory] = useState("");

    const addDigit = (digito) => {
        let num = number;
        num[position] = digito;
        setNumber(num);
        setDisplay(num[position]);

    }

    const addOperation = (oper) => {
        setOperation(oper);
        setPosition(1);
        setDisplay(oper);
    }

    const setResult = () => {
        setPosition(0);
        let resultado = 0
        if (operation == "+") resultado = parseInt(number[0]) + parseInt(number[1]);
        if (operation == "-") resultado = parseInt(number[0]) - parseInt(number[1]);
        if (operation == "*") resultado = parseInt(number[0]) * parseInt(number[1]);
        if (operation == "/") resultado = parseInt(number[0]) / parseInt(number[1]);

        setHistory(number[0]+" "+operation+" "+number[1]+" =")
        setDisplay(resultado);
    }

    const reset = () => {
        setNumber([0, 0]);
        setOperation("");
        setHistory("")
        setPosition(0);
        setDisplay(0);
    }

    return (
        <>
            <View>
                <Display history={history} value={display} />
            </View>
            <View style={styles.buttons}>

                {operations.map((button) =>
                    <ButtonCalc label={button} func={addOperation} />
                )}

                {buttons.map((button) =>
                    <ButtonCalc label={button} func={addDigit} />
                )}

                <ButtonCalc label={'AC'} func={reset} />
                <ButtonCalc label={'='} func={setResult} />
            </View>
        </>
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
    fonts: {
        fontSize: 40,
        margin: 10,
        padding: 15
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

