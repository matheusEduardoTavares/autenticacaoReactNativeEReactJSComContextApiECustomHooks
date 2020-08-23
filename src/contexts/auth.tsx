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

import React, { createContext, useState } from 'react'
import * as auth from '../services/auth'

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
}

// const AuthContext = createContext<AuthContextData | null>(null)
const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    // Nós não iremos salvar o signed no estado, e
    //sim o usuário pois é isso que realmente nos 
    //importa:
    const [user, setUser] = useState<object | null>(null)

    async function signIn(){
        const response = await auth.signIn()

        setUser(response.user)
    }

    // O token só precisa ser acessado pelo cliente
    //de requisições HTTP, não precisa ser usado 
    //pelos componentes diretamente
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext