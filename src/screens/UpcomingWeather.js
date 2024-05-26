import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import React from "react";
import ListItem from "../components/ListItem";

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

// const Item = (props) => {
//   const { dt, min, max, condition } = props;
//   return (
//     <View style={styles.item}>
//       <Feather name={"sun"} size={50} color={"white"} />
//       <Text style={styles.date}>{dt}</Text>
//       <Text style={styles.temp}>{min}</Text>
//       <Text style={styles.temp}>{max}</Text>
//     </View>
//   );
// };

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'gray',
  },
  image: {
    flex: 1
  },
});

export default UpcomingWeather;
