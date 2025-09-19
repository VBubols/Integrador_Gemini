import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Login() {
    const [nomeUsr, setNomeUsr] = useState();
    const [senha, setSenha] = useState();


    const entrar = async () => {
        const data = await AsyncStorage.getItem('usuarios');
        const listaUsr = data ? JSON.parse(data) : [];
        
        let isValid = false
        for(const index in listaUsr){
            if(listaUsr[index].nomeUsr === nomeUsr && listaUsr[index].senha === senha){
                isValid = true;
                break;
            } 
        }

        if(isValid){
            alert("deu boa")
        } else {
            alert("Deu ruim")
        }
    }

    return (
        <View>
            <Text>Login</Text>   

            <TextInput placeholder='Nome de usuário' value={nomeUsr} onChangeText={setNomeUsr}></TextInput>

            <TextInput placeholder='Senha' value={senha} onChangeText={setSenha} secureTextEntry></TextInput>

            <Button title='Entrar' color='#555' onPress={entrar}></Button>
        </View>
    )
}