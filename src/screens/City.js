/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native'

import IconSaya from '../components/IconSaya'

const City = () => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetText,
    riseSetWrapper,
    rowLayout,
    imageLayout
  } = styles

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={imageLayout}
        source={require('../../assets/city-background.jpg')}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={[(populationWrapper, rowLayout)]}>
          <IconSaya
            iconName={'user'}
            iconColor={'red'}
            bodyText={'8000'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconSaya
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'13:22:12am'}
            bodyTextStyles={riseSetText}
          />
          <IconSaya
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'18:09:67pm'}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
