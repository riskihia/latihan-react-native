import React from 'react'
import { StyleSheet, View } from 'react-native'
import City from './src/screens/City'

export default function App() {
  return (
    <View style={styles.container}>
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
