import React from "react";
import { View, Text } from "react-native";

const BookDetailScreen = (props) => {
    const item = props.route.params.item;
    
    return (
        <View>
            <Text style={styles.titleStyle}>{item.title}</Text>
            <Text style={styles.authorStyle}>{item.author}</Text>
        </View>
    );
}

export default BookDetailScreen;

const styles = {
    titleStyle: {
        fontSize: 30,
        color: '#5858FA',
        textAlign: 'center',
        paddingTop: 50
    },
    authorStyle: {
        fontSize: 20,
        textAlign: 'right',
        paddingTop: 5,
        paddingRight: 20
    }
}

