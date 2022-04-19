import { View, FlatList, Text } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import books from "../../data/books.json";
import { useFonts, FjallaOne_400Regular } from '@expo-google-fonts/fjalla-one';

const AuthorsList = () => {
    let [fontsLoaded] = useFonts({
        FjallaOne_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }

  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
            return (
                <Text style={styles.textStyle}>{item.author}</Text>
            );
        }}
        keyExtractor= {(item) => item.title}
      />
    </View>
  );
}

const styles = {
    textStyle: {
        marginVertical: 30,
        fontFamily: 'FjallaOne_400Regular',
        fontSize: 16
    }
}
export default AuthorsList;

