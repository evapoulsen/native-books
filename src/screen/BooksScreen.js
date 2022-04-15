import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BooksScreen = () => {

    return (
        <View style={styles.bookScreenStyle}>
            <Text>Books Screen</Text>
        </View>
    );
}

const styles = {
    bookScreenStyle: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#F2F2F2'
    }
}

export default BooksScreen;