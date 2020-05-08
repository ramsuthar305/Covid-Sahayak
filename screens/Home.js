import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Picker,

} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Columns from "./components/CoronaStatusColumn";
import * as All from '../assets/flags/flags';
import LottieView from 'lottie-react-native';
import Header from './components/Header';


const fetchFonts = () => {
  console.log("loading font");
  return Font.loadAsync({
    "Nunito-regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-SemiBold": require("../assets/fonts/Nunito-SemiBold.ttf"),
  });
};

export default function Home({navigation}) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [Data, setData] = useState([]);
  const [Month, setMonth] = useState(null);
  const [DataLoading, setDataLoading] = useState(true);
  const [CountryData, setCountryData] = useState(null);

  const [SelectedCountry, setSelectedCountry] = useState("India");
  const [countryList, setCountryList] = useState([]);
  const [lastUpdated, setlastUpdated] = useState(null);


  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://api.covid19api.com/summary");
      setData(await response.json());

    }
    fetchMyAPI();
  }, []);

  function fetchCountryData() {
    console.log('hii')
    const currentCountry = Data.Countries.filter(country => {
      if (country.Country == SelectedCountry) { return country }
    })
    setCountryData(currentCountry[0])
    setDataLoading(!DataLoading)
    console.log(CountryData)
  }


  useEffect(() => {
    if (Data.length != 0) {
      fetchCountryData()
    }
  }, [SelectedCountry])

  useEffect(() => {
    console.log('Called' + Data.length)
    if (Data.length != 0) {
      fetchCountryData()
      //console.log(countryList)
      //console.log(JSON.stringify(CurrentMonthCountryData))
      let today = new Date().getDate()
      setMonth(new Date().toString().split(" ")[1])
      setDataLoading(false)
      fetchCountryData()
      setlastUpdated(new Date().toDateString() + ", " + new Date().toLocaleTimeString())


    }
  }, [Data])


  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  if (DataLoading) {
    return (<LottieView
      autoPlay loop
      source={require('../assets/images/coronaLoading.json')}
    />);
  } else {
    return (
      <ScrollView>
        <SafeAreaView style={style.safeArea}>
          <StatusBar translucent color="black" backgroundColor="black" />
          <Header />
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
                  cases={Data.Global.TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  deaths={Data.Global.TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  cured={Data.Global.TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                />
                <Text style={style.lastUpdated}>Last updated {lastUpdated}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: "6%" }}>

            <View style={style.GlobalStatus} elevation={3}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", flex: 2 }}>
                  <Image
                    source={All[`${SelectedCountry.replace(/ /g, "").replace(/,/g, "")}`]}
                    style={style.menu}
                  />
                  <Text style={[style.GlobalStatusHeading, { flex: 1, flexWrap: 'wrap' }]}> {SelectedCountry}</Text>
                </View>
                <View style={{ flex: 1, marginTop: "-4%" }}>

                  <Picker
                    selectedValue={SelectedCountry}
                    onValueChange={(country) => { setDataLoading(!DataLoading); setSelectedCountry(country); fetchCountryData() }}
                    mode="dialog"
                    textStyle={{ color: "black", fontFamily: "Nunito-SemiBold" }} >

                    {Data.Countries.map((country, i) => {

                      return (<Picker.Item key={i} value={country.Country} label={country.Country} />)
                    })}

                  </Picker>
                </View>

              </View>
              <TouchableOpacity onPress={() => navigation.navigate('IndiaStats')}>
                <Columns
                  cases={CountryData.TotalConfirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  deaths={CountryData.TotalDeaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  cured={CountryData.TotalRecovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}

                />
              </TouchableOpacity>
              <Text style={style.lastUpdated}>Last updated {lastUpdated}</Text>
            </View>

          </View>
          <Text style={[style.GlobalStatusHeading, { marginTop: "4%" }]}>
            Latest COVID-19 tweets
        </Text>
          <View style={{ marginVertical: "3%" }}>
            <TouchableOpacity onPress = {() => navigation.navigate('Tweets')}>
              <View style={style.GlobalStatus} elevation={3}>
                <View style={{ flexDirection: "row" }}>
                  <Entypo name="twitter" size={24} color="black" />
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
      </ScrollView>
    );
  }

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
    fontSize: 16.5,
    fontFamily: "Nunito-regular",
    flex: 8,
  },
});
