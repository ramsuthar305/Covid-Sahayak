import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Entypo } from "@expo/vector-icons";
import { findFlagUrlByCountryName } from "country-flags-svg";
import { Ionicons } from "@expo/vector-icons";
import Columns from "./components/CoronaStatusColumn";

const fetchFonts = () => {
  console.log("loading font");
  return Font.loadAsync({
    "Nunito-regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
  });
};

export default function Home() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <SafeAreaView style={style.safeArea}>
      <StatusBar translucent color="black" backgroundColor="black" />
      <View style={style.header}>
        <Image
          source={require("../assets/images/menu.png")}
          style={style.menu}
        />
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../assets/images/corona.png")}
            style={style.menu}
          />
          <Text style={style.headerTitle}> Sahayak</Text>
        </View>
      </View>
      <View style={{ marginTop: "6%" }} elevation={2}>
        <TouchableOpacity>
          <View style={style.healthStatus}>
            <Text style={style.healthStatusHeading}>
              Report your COVID-19 health status.
            </Text>
            <Text style={style.healthStatusTagline}>
              Take 1 minute every day, to report your health status and help us
              map the spread of corona virus.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "6%" }}>
        <TouchableOpacity>
          <View style={style.GlobalStatus} elevation={3}>
            <Text style={style.GlobalStatusHeading}>Coronavirus Global</Text>
            <Columns
              cases={"1,254,464"}
              deaths={"2,254,464"}
              cured={"1,254,464"}
            />
            <Text style={style.lastUpdated}>Last updated Apr 08, 03:54 PM</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "6%" }}>
        <TouchableOpacity>
          <View style={style.GlobalStatus} elevation={3}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/flags/India.png")}
                style={style.menu}
              />
              <Text style={style.GlobalStatusHeading}> India</Text>
            </View>
            <Columns
              cases={"1,254,464"}
              deaths={"2,254,464"}
              cured={"1,254,464"}
            />
            <Text style={style.lastUpdated}>Last updated Apr 08, 03:54 PM</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={[style.GlobalStatusHeading, { marginTop: "5%" }]}>
        Latest COVID-19 news
      </Text>
      <View style={{ marginTop: "5%" }}>
        <TouchableOpacity>
          <View style={style.GlobalStatus} elevation={3}>
            <View style={{ flexDirection: "row" }}>
              <Entypo name="news" size={24} color="black" style={{ flex: 1 }} />
              <Text style={style.newsHeadline}>
                {" "}
                Lockdown 3.0 to be estended till 17 may
              </Text>
              <Ionicons name="ios-arrow-forward" size={24} color="#636e72" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
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
  healthStatus: {
    backgroundColor: "#EA2027",
    borderRadius: 15,
    padding: "5%",
  },
  GlobalStatus: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: "5%",
  },
  healthStatusHeading: {
    color: "white",
    fontFamily: "Nunito-Bold",
    fontSize: 18,
  },
  healthStatusTagline: {
    color: "white",
    fontFamily: "Nunito-Bold",
    fontSize: 14,
    marginTop: "3%",
  },
  GlobalStatusHeading: {
    color: "black",
    fontFamily: "Nunito-Bold",
    fontSize: 20,
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
