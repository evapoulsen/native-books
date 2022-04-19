import React from "react";
import { View, Text } from "react-native";

const AuthorsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Authors Screen</Text>
        </View>
    );
};

export default AuthorsScreen;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}