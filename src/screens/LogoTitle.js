import React from "react";
import { Image } from "react-native";

function LogoTitle() {
    return (
        <Image
        style={{ width: 40, height: 40}}
        source={require('../../assets/images/books-logo.png')}
        />
    );
}

export default LogoTitle;