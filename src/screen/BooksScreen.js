import React from "react";
import { View, Text } from "react-native";
import BookList from "../components/BookList";

const BooksScreen = () => {

    return (
        <View style={styles.bookScreenStyle}>
            <BookList />
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