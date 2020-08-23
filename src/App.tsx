import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import AuthContext from './contexts/auth'
import { AuthProvider } from './contexts/auth'

import style from './styles'

import Routes from './routes'

const App: React.FC = () => { 
    // const [signed, setSigned] = useState(false)

    // function signIn() {
    //     // const response = await signIn()

    //     // console.log(response)

    //     setSigned(true)
    // }

    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    )
}

export default App