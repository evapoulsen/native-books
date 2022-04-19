import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BookList from "../components/BookList";

const BooksScreen = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => 
                    {props.navigation.navigate("Details")}
                }
                style={styles.buttonStyle}
            >
                <Text>Go to Book Detail Screen</Text>
            </TouchableOpacity>
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
    },
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 7,
        marginTop: 50

    }
}

