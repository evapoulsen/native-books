import React from "react";
import { View, Button, Text } from "react-native";

const HomeScreen = () => {

    return (
        <View style={styles.homeStyle}>
            <Text>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                title="Go to Books"
                color= '#A9A9F5'
                />
                <Button
                title="Go to Authors"
                color= '#2ECCFA'
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