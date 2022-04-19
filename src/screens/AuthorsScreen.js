import React from "react";
import { View, Text } from "react-native";
import AuthorsList from "../components/AuthorsList";

const AuthorsScreen = () => {
    return (
        <View style={styles.container}>
            <AuthorsList />
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