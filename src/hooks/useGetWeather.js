import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [weather, setWeather] = useState([]);
const [lat, setLat] = useState([]);
const [lon, setLon] = useState([]);

export const useGetWeather = () => {
    const fetchWeatherData = async () => {
        try {
          const res = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
          );
          const data = await response.json();
          setWeather(data);
        } catch (e) {
          setError("Could not fetch weather");
        } finally {
          setLoading(false);
        }
      };
    
      console.log(WEATHER_API_KEY);
    
      useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            setError("permission to access location was denied");
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLat(location.coords.latitude);
          setLon(location.coords.longitude);
          await fetchWeatherData;
        })();
      }, [lat, lon]);
}