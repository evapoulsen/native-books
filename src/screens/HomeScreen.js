import React from "react";
import { View, Button, Text } from "react-native";

function HomeScreen({ navigation }) {

    return (
        <View style={styles.homeStyle}>
            <Text>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to Books"
                color= '#A9A9F5'
                onPress={() => navigation.navigate('Books', { name: 'My Books' } )}
                />
                <Button
                title="Go to Authors"
                color= '#2ECCFA'
                onPress={() => navigation.navigate('Authors', { name: 'The Authors' } )}
                />
            </View>
        </View>
    );
};

const styles = {
    homeStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
    }
}

export default HomeScreen;

