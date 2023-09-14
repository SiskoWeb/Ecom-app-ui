import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Header = () => {

    const onSearch = () => {
        console.log('searching')
    }


    return (
        <View className="flex flex-col gap-2">
            <View className="flex  items-end">
                <Icon
                    name="bell"
                    size={wp('6%')}
                    color='grey'

                />

            </View>

            <View><Text className='font-extrabold text-3xl '>Sneakers</Text></View>

            <View className="flex flex-row gap-2 items-center w-f p-1 bg-gray-100 rounded-sm">
                <Ionicons name='search' size={wp('4%')} color='grey' />
                <TextInput
                    placeholder='Search'
                    onChange={onSearch}

                />
            </View>

        </View>
    )
}

export default Header