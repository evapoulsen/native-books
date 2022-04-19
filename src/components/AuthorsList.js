import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import books from "../../data/books.json";
import { useFonts, FjallaOne_400Regular } from '@expo-google-fonts/fjalla-one';
import { useNavigation } from '@react-navigation/native';

const AuthorsList = () => {
    let [fontsLoaded] = useFonts({
        FjallaOne_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />
    }
const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                onPress={() => {
                  navigation.navigate("Book Details", {item})
                }}
              >
              <Text style={styles.textStyle}>{item.author}</Text>
              </TouchableOpacity>
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

