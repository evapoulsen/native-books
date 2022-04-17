import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import AppLoading from "expo-app-loading";
import books from "../../data/books.json";
import { useFonts, Raleway_200ExtraLight } from "@expo-google-fonts/raleway";


const BookList = (props) => {
    let [fontsLoaded] = useFonts({
        Raleway_200ExtraLight,
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
                    <Text style={styles.textStyle}>{item.title}</Text>
                );
            }
            }
            keyExtractor= {(item) => item.title}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30,
        fontFamily: 'Raleway_200ExtraLight',
        fontSize: 16
    }
});

export default BookList;

