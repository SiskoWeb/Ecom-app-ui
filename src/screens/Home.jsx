import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../components/Header.component';


const Home = () => {


  return (
    <SafeAreaView style={{
      paddingVertical: StatusBar.currentHeight - 5,
      paddingHorizontal: StatusBar.currentHeight - 5,

      width: wp("100%"), height: "100%",
      backgroundColor: 'white',

    }}>
      <Header />
    </SafeAreaView>
  )
}

export default Home