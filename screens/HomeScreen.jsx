import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';
import {CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/solid'

const HomeScreen = () => {
    const [showSearch,setShowSearch] = useState(false)
    const [locations,setLocations] = useState([1,2,3])

    const handleLocation = (item)=>{

    }

    return (
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full"/>
            
            <SafeAreaView className="flex flex-1 pt-14 px-4">
                <View style={{height:'7%'}}>

                    <View style={{backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent'}} className="flex-row justify-end items-center rounded-full">
                        {
                            showSearch ? (
                                <TextInput className="text-white text-base flex-1 h-10 pb-1 pl-6" placeholder='Search City' placeholderTextColor={'lightgray'} />
                            ) : null
                        }
                        <TouchableOpacity onPress={()=>setShowSearch(!showSearch)} className="rounded-full p-3 m-1" style={{backgroundColor:theme.bgWhite(0.3)}}>
                            <MagnifyingGlassIcon size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                    {
                        locations.length > 0 && showSearch ? 
                        (
                            <View className="absolute w-full bg-gray-200 top-16 rounded-3xl">
                                {
                                    locations.map((item,index)=>{
                                        let showBorder = index+1 != locations.length;
                                        let boderClass = showBorder ? 'border-b-2 border-b-gray-300' : '';
                                        return  (
                                            <TouchableOpacity onPress={()=>handleLocation(item)} key={index} className={"flex-row items-center border-0 p-3 px-4 mb-1"+boderClass}>
                                                <MapPinIcon size={20} color="gray"/>
                                                <Text className="text-black text-lg ml-2">London</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                    )
                                }
                            </View>
                        ) : 
                        null
                    }
                </View>
                {/* section */}
                <View className="flex justify-around flex-1 mx-4 mb-2">
                    {/* location */}
                    <Text className="text-white text-center text-2xl font-bold">
                        London,
                        <Text className="text-lg font-semibold text-gray-300">
                            United Kingdom
                        </Text>
                    </Text>
                    {/* image */}
                    <View className="flex-row justify-center">
                        <Image className="w-52 h-52" source={require('../assets/images/partlycloudy.png')}/>
                    </View>
                    {/* details */}
                    <View className="space-y-2">
                        <Text className="text-center font-bold text-white text-6xl ml-5">
                            30&#176;
                        </Text>
                        <Text className="text-center font-bold text-white text-xl tracking-widest">
                            Sunny
                        </Text>
                    </View>
                    {/* other status */}
                    <View className="flex-row justify-between mx-4">
                        <View className="flex-row space-x-2 items-center">
                            <Image source={require('../assets/icons/wind.png')} className="h-6 w-6" />
                            <Text className="text-white font-semibold text-base">
                                22km
                            </Text>
                        </View>

                        <View className="flex-row space-x-2 items-center">
                            <Image source={require('../assets/icons/drop.png')} className="h-6 w-6" />
                            <Text className="text-white font-semibold text-base">
                                30%
                            </Text>
                        </View>

                        <View className="flex-row space-x-2 items-center">
                            <Image source={require('../assets/icons/sun.png')} className="h-6 w-6" />
                            <Text className="text-white font-semibold text-base">
                                6:05 AM
                            </Text>
                        </View>
                    </View>
                </View>

                {/* next days */}
                <View className="mb-2 space-y-3">
                    <View className="flex-row items-center mx-5 space-x-2">
                        <CalendarDaysIcon size={22} color='white'/>
                        <Text className="text-white text-base">
                            Daily
                        </Text>
                    </View>

                    <ScrollView
                        horizontal
                        contentContainerStyle={{paddingHorizontal:15}}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View 
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                            className="flex justify-center w-24 rounded-3xl py-3 space-y-1 mr-4 items-center"
                        >
                            <Image className="w-11 h-11" source={require('../assets/images/heavyrain.png')}/>
                            <Text className="text-white">
                                Monday
                            </Text>
                            <Text className="text-white text-xl font-semibold">
                                30&#176;
                            </Text>
                        </View>

                        <View 
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                            className="flex justify-center w-24 rounded-3xl py-3 space-y-1 mr-4 items-center"
                        >
                            <Image className="w-11 h-11" source={require('../assets/images/heavyrain.png')}/>
                            <Text className="text-white">
                                Monday
                            </Text>
                            <Text className="text-white text-xl font-semibold">
                                30&#176;
                            </Text>
                        </View>

                        <View 
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                            className="flex justify-center w-24 rounded-3xl py-3 space-y-1 mr-4 items-center"
                        >
                            <Image className="w-11 h-11" source={require('../assets/images/heavyrain.png')}/>
                            <Text className="text-white">
                                Monday
                            </Text>
                            <Text className="text-white text-xl font-semibold">
                                30&#176;
                            </Text>
                        </View>

                        <View 
                            style={{backgroundColor:theme.bgWhite(0.15)}}
                            className="flex justify-center w-24 rounded-3xl py-3 space-y-1 mr-4 items-center"
                        >
                            <Image className="w-11 h-11" source={require('../assets/images/heavyrain.png')}/>
                            <Text className="text-white">
                                Monday
                            </Text>
                            <Text className="text-white text-xl font-semibold">
                                30&#176;
                            </Text>
                        </View>
                    </ScrollView>
                    
                </View>
            </SafeAreaView>
            
        </View>
    )
}

export default HomeScreen