import { React, useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import RootNavigation from '../../route/Routes'
import { COLORS } from '../../constants/theme'


import { ActivityIndicator } from 'react-native';



export default function LoadingScreen() {

    const [loading, setLoading] = useState(true)




    useEffect(() => {

        setTimeout(() => { setLoading(false) }, 2000)
    }, [])



    return (
        <>
            {
                loading ?
                    <View style={{
                        flex: 1,
                        backgroundColor: COLORS.bg,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator
                            size="large"
                            color={COLORS.second}
                        />
                        <Text style={{ color: 'white' }}>Loading Data...</Text>
                    </View>
                    :
                    <RootNavigation />
            }
        </>
    )
}