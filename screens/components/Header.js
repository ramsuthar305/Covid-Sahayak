import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet

} from "react-native";

export default function Header() {
    return (
        <View style={style.header}>
            <Image
                source={require("../../assets/images/menu.png")}
                style={style.menu}
            />
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require("../../assets/images/corona.png")}
                    style={style.menu}
                />
                <Text style={style.headerTitle}> Sahayak</Text>
            </View>
        </View>
    )
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 30 : StatusBar.currentHeight + 10,
        paddingHorizontal: "3%",
    },
    menu: {
        height: 25,
        width: 22,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 20,
        color: "#636e72",
    },

});
