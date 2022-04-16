import React from "react";
import { View, Text } from "react-native";

const AuthorsScreen = () => {

    return (
        <View style={styles.authorScreenStyle}>
            <Text>Authors Screen</Text>
        </View>
    );
}

const styles = {
    authorScreenStyle: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#E6E6E6'
    }
}

export default AuthorsScreen;