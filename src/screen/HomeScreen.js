import React from "react";
import { View, Button, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeStyle}>
      <Text>Home Screen</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Go to Books"
          onPress={() => navigation.navigate('Books', { name: 'My Books'} )}
          color= '#A9A9F5'
        />
        <Button
          title="Go to Authors"
          onPress={() => navigation.navigate('Authors', { name: 'The Authors'})}
          color= '#2ECCFA'
        />
      </View>
    </View>
  );
}

const styles = {
    homeStyle: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#FAFAFA'
    },
    buttonsContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'center'
    }
  }

export default HomeScreen;