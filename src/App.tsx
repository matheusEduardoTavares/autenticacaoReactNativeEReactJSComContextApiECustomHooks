import 'react-native-gesture-handler'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import style from './styles'

import Routes from './routes'

const App: React.FC = () => { 
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}

export default App