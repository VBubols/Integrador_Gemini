import { useState } from 'react';
import { Button, Text, TextInput, View } from "react-native-web";

export default function Gemini() {
    const [prompt, setprompt] = useState();
    const [resposta, setResposta] = useState();
    
    const pergunta = async () => {
        const apiKey = 'AIzaSyCAqB8STdN_x_LZB1DalDtHoQ_aSjmLY-0';
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const resposta = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "contents": [
                  {
                    "parts": [
                      {
                        "text": prompt
                      }
                    ]
                  }
                ]
              })
        });
        const info = await resposta.json()
        const text = info.candidates[0].content.parts[0].text;
        setResposta(text)
    }   

    return(
        <View>
            <Text>Gemini</Text>

            <TextInput placeholder="Digite seu prompt" value={prompt} onChangeText={setprompt}></TextInput>

            <Button title='Pergunta' color='#555' onPress={pergunta}></Button>

            <Text>
                {resposta}
            </Text>
        </View>
    )
}