import React from 'react'
import { View, Button } from 'react-native'
import { signIn } from '../../services/auth'

import styles from './styles'

const SignIn: React.FC = () => {
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