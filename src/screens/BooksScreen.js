import React from "react";
import { View, Text } from "react-native";

const BooksScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Books Screen</Text>
        </View>
    );
};

export default BooksScreen;

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}

