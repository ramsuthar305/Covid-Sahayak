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

               
            </View>
            <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Deaths</Text>
                <Text style={[style.caseNumber, { color: "#e74c3c" }]}>
                    {deaths}
                </Text>
                
            </View>
            <View style={style.coronaStatusColumn}>
                <Text style={style.casesHeading}>Total Cured</Text>
                <Text style={[style.caseNumber, { color: "#27ae60" }]}>
                    {cured}
                </Text>
               
            </View>
        </View>
    );
}

export default Columns;

const style = StyleSheet.create({


    coronaStatusColumn: {
        marginVertical: "5%",
        flex:1,
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
  
});
