import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  StatusBar,
  View,
  TextInput,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const clear = require("../assets/Clear.png");
const mist = require("../assets/Mist.png");
const clouds = require("../assets/Clouds.png");
const drizzle = require("../assets/Drizzle.png");
const rain = require("../assets/Rain.png");
const snow = require("../assets/Snow.png");

const weatherOptions = {
  Clear: {
    iconName: clear,
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Quyoshli",
    description: "Sayrga boring, uyda qolishni to'xtating!",
  },
  Mist: {
    iconName: mist,
    gradient: ["#fff", "gray"],
    title: "Tumanli",
    description: "Ko'chaga chiqmang, yomon ob-havo!",
  },
  Clouds: {
    iconName: clouds,
    gradient: ["#fff", "gray"],
    title: "Bulutli",
    description: "Havo bulutli!",
  },
  Drizzle: {
    iconName: drizzle,
    gradient: ["#fff", "gray"],
    title: "Yomg'ir bo'lishi mumkun",
    description: "Yomg'ir yog'ishi mumkun!",
  },
  Rain: {
    iconName: rain,
    gradient: ["#fff", "gray"],
    title: "Yomg'irli",
    description: "Havo Yomg'irli!",
  },
  Snow: {
    iconName: snow,
    gradient: ["#fff", "gray"],
    title: "Qor",
    description: "Havo qorli!",
  },
};

export default function Weather({ temp, name, condition, setWeather }) {
  const [query, setQuery] = useState("");

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.icon}>
        <Image
          source={weatherOptions[condition].iconName}
          style={{ width: 300, height: 300, objectFit: "contain" }}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.title}>{weatherOptions[condition].title}</Text>
      <Text style={styles.description}>
        {weatherOptions[condition].description}
      </Text>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
        <Button
          style={styles.btn}
          title="Search"
          onPress={() => setWeather(query, setQuery)}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  temp: {
    fontSize: 70,
    fontWeight: "900",
  },
  name: {
    fontSize: 25,
    fontWeight: "900",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 30,
    marginVertical: 20,
  },
  description: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  input: {
    width: "70%",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 10,
    marginRight: 5,
  },
  btn: {
    fontWeight: "100",
    backgroundColor: "red",
  },
});
