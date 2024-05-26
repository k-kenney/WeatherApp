import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet. create({
    container: {
        flex: 1,
    }
})

export default UpcomingWeather