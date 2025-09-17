import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Cadastro() {
    const [nomeUsr, setNomeUsr] = useState();
    const [senha, setSenha] = useState();
    const [listaUsr, SetListaUsr] = useState([]);

    const cadastrar = async () => {
        const obj = {
            nomeUsr, senha
        }

        const copy = [...listaUsr, obj]

        await AsyncStorage.setItem('usuarios', JSON.stringify(copy))
        
        SetListaUsr(copy)

        alert(nomeUsr + " " + senha)
    }

    return (
        <View>
            <Text>Cadastro</Text>
            <TextInput placeholder='Nome de Usuario' value={nomeUsr} onChangeText={setNomeUsr}></TextInput>
            <TextInput placeholder='Senha' value={senha} onChangeText={setSenha}></TextInput>
            <Button title='Cadastrar' color='#555' onPress={cadastrar}></Button>
        </View>
    )
}