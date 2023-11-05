/* eslint-disable no-undef */
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: '2023-02-19 12:00:00',
    main: {
      temp_max: 9.0,
      temp_min: 7.0
    },
    weather: [
      {
        main: 'Partly Cloudy'
      }
    ]
  },
  {
    dt_txt: '2023-02-20 12:00:00',
    main: {
      temp_max: 10.5,
      temp_min: 8.5
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background.jpg')}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
