import React from 'react'
import { View, Button, Text } from 'react-native'
import {useAuth} from '../../contexts/auth'

import styles from './styles'

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth()

    function handleSignOut() {
        signOut()
    }

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Sign out" onPress={handleSignOut}></Button>
        </View>
    )
}

export default Dashboard