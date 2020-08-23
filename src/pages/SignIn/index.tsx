import React, { useContext } from 'react'
import { View, Button } from 'react-native'
import AuthContext from '../../contexts/auth'

import styles from './styles'

const SignIn: React.FC = () => {
    const { signed, user, signIn } = useContext(AuthContext)

    console.log(signed)
    console.log(user)

    function handleSignIn() {
        signIn()
    }

    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={handleSignIn}></Button>
        </View>
    )
}

export default SignIn