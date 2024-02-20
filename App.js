import { useState, useEffect } from "react";
import { StyleSheet, Alert } from "react-native";
import Loading from "./components/loading";
import Weather from "./components/weather";
import axios from "axios";
import * as Location from "expo-location";

const API_KEY = "c18192c73829a0be23c398b4eb5ed69b";

export default function App() {
  const [isLoading, setisLoading] = useState(true);
  const [location, setlocation] = useState(null);

  const setWeather = async (query, setQuery) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    );
    setlocation(data);
    setQuery("");
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      setlocation(data);
      setisLoading(false);
    } catch (error) {
      Alert.alert("i can't find your current location, so bad ):");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Weather
      setWeather={setWeather}
      temp={Math.round(location.main.temp)}
      name={location.name}
      condition={location.weather[0].main}
    />
  );
}

const styles = StyleSheet.create({});
