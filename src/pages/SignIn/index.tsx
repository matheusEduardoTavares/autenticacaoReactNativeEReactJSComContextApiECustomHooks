import React, { useContext } from 'react'
import { View, Button } from 'react-native'
import { signIn } from '../../services/auth'
import AuthContext from '../../contexts/auth'

import styles from './styles'

const SignIn: React.FC = () => {
    const { signed } = useContext(AuthContext)

    console.log(signed)

    async function handleSignIn() {
        // email, password
        const response = await signIn()
        console.log(response)
    }

    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={handleSignIn}></Button>
        </View>
    )
}

export default SignIn