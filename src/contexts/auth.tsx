//Informações compartilhadas entre mais de um 
//contexto o ideal é que estejam dentro de arquivos
//própios para contexto, como no caso em que 
//precisamos compartilhar o user, se está logado ou
//não (signed) e a função que faz o login pois esta
//será chamada na tela onde tem o botão para logar.

/*
Com o useContext, em qualquer momento que seu valor
for alterado, ele é renderizado novamente, atualiza
todos os componentes que o estão utilizando novamente
*/

import React, { createContext, useState, useEffect } from 'react'
// import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'
import * as auth from '../services/auth'

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

// const AuthContext = createContext<AuthContextData | null>(null)
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    // Nós não iremos salvar o signed no estado, e
    //sim o usuário pois é isso que realmente nos 
    //importa:
    const [user, setUser] = useState<object | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStoragedData() {
            // O código ficaria melhor se 
            //usássemos um multiGet ao invés de um 
            //get normal pois aí seria um await só
            //já que a funcionalidade é a mesma pros
            //2: de obter um dado do async storage.
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

            if (storagedUser && storagedToken) {
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`
                setUser(JSON.parse(storagedUser))
                setLoading(false)
            }
        }

        loadStoragedData()
    }, [])

    async function signIn(){
        const response = await auth.signIn()

        setUser(response.user)

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
        await AsyncStorage.setItem('@RNAuth:token', response.token)
    }

    function signOut(){
        AsyncStorage.clear()
        .then(() => {
            setUser(null)
        })
    }

    // O token só precisa ser acessado pelo cliente
    //de requisições HTTP, não precisa ser usado 
    //pelos componentes diretamente
    return (
        <AuthContext.Provider value={{ signed: !!user, loading, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext