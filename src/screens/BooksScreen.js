import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BookList from "../components/BookList";

const BooksScreen = () => {

    return (
        <View style={styles.container}>
            <BookList />
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

