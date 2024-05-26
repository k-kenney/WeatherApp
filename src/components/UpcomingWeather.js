import { View, Text, SafeAreaView, StyleSheet, FlatList, StatusBar } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const DATA = [
  {
    dt: 1661870592,
    main: {
      temp_min: 297.56,
      temp_max: 300.05,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt: 1661870592,
    main: {
      temp_min: 245.56,
      temp_max: 287.05,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt: 1661870592,
    main: {
      temp_min: 305.56,
      temp_max: 310.05,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
];

const Item = (props) => {
  const { dt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color={"white"} />
      <Text style={styles.date}>{dt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={DATA} renderItem={renderItem}>
        keyExtractor={(item) => item.dt}
      </FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:  'red',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  }
});

export default UpcomingWeather;
