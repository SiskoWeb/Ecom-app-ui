import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Home = () => {
  return (
    <SafeAreaView
      className={`py-[${StatusBar.currentHeight + 8}] w-[${wp("100%")}] h-full bg-black`}
    >
      <Text>page1</Text>
    </SafeAreaView>
  )
}

export default Home