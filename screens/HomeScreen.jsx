import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
    return (
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full"/>
            <SafeAreaView className="flex flex-1">
                <View style={{height:'7%'}}>

                </View>
            </SafeAreaView>
            {/* <Text className="text-red-300">Ahmed</Text> */}
        </View>
    )
}

export default HomeScreen