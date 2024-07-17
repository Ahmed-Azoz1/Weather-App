import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const HomeScreen = () => {
    return (
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full"/>
            
            <SafeAreaView className="flex flex-1 pt-14 px-4">
                <View style={{height:'7%'}}>
                    <View style={{backgroundColor:theme.bgWhite(0.2)}} className="flex-row justify-end items-center rounded-full">
                        <TextInput className="text-white text-base flex-1 h-10 pb-1 pl-6" placeholder='Search City' placeholderTextColor={'lightgray'}></TextInput>
                        <TouchableOpacity className="rounded-full p-3 m-1" style={{backgroundColor:theme.bgWhite(0.3)}}>
                            <MagnifyingGlassIcon size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            
        </View>
    )
}

export default HomeScreen