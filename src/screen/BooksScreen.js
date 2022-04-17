import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BookList from "../components/BookList";

const BooksScreen = (props) => {

    return (
        <View style={styles.bookScreenStyle}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => {
                props.navigation.navigate('Book Details')
            }}
            >
                <Text>Go to Book Details</Text>
            </TouchableOpacity>
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
    },
    buttonStyle: {
        backgroundColor: '#B0B2B5',
        marginTop: 50,
        padding: 10,
        color: 'white'
    }
}

export default BooksScreen;

