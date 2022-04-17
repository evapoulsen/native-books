import React from "react";
import { View, Text } from "react-native";
import AuthorList from "../components/AuthorsList";

const AuthorsScreen = () => {

    return (
        <View style={styles.authorScreenStyle}>
            <AuthorList />
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