import React, { useContext } from 'react'
import { View, Button } from 'react-native'
import AuthContext from '../../contexts/auth'

import styles from './styles'

const Dashboard: React.FC = () => {
    const { signOut } = useContext(AuthContext)

    function handleSignOut() {
        signOut()
    }

    return (
        <View style={styles.container}>
            <Button title="Sign out" onPress={handleSignOut}></Button>
        </View>
    )
}

export default Dashboard