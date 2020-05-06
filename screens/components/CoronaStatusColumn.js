import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,

} from "react-native";

const Columns = ({ deaths, cases, cured }) => {
    return (
        <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
            <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cases</Text>
                <Text style={[style.caseNumber, { color: "#3498db" }]}>
                    {cases}
                </Text>

                <Text style={[style.caseAddition, { color: "#3498db" }]}>
                    <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
            </View>
            <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Deaths</Text>
                <Text style={[style.caseNumber, { color: "#e74c3c" }]}>
                    {deaths}
                </Text>
                <Text style={[style.caseAddition, { color: "#e74c3c" }]}>
                    <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
            </View>
            <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cured</Text>
                <Text style={[style.caseNumber, { color: "#27ae60" }]}>
                    {cured}
                </Text>
                <Text style={[style.caseAddition, { color: "#27ae60" }]}>
                    <Text style={{ color: "#2c3e50" }}>Mar</Text> +61,999
                </Text>
            </View>
        </View>
    );
}

export default Columns;

const style = StyleSheet.create({


    coronaStatusColumn: {
        marginVertical: "5%",
    },
    casesHeading: {
        fontFamily: "Nunito-SemiBold",
        fontSize: 17,
    },
    caseNumber: {
        fontFamily: "Nunito-Bold",
        marginVertical: "5%",
        fontSize: 24,
    },
    caseAddition: {
        fontFamily: "Nunito-SemiBold",
    },
    lastUpdated: {
        fontFamily: "Nunito-regular",
    },
    newsHeadline: {
        fontSize: 17,
        fontFamily: "Nunito-regular",
        flex: 8,
    },
});
