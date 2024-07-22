import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { theme } from '../theme';
import {CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/solid'

import { debounce } from 'lodash';
import { GetLocations, GetWeatherForecast } from '../utils/apiWeather';
import { weatherImages, weatherImagesAr } from '../utils/axiosWeather';

import * as Progress from 'react-native-progress';
import { getData, storeData } from '../utils/asyncStorage';


const HomeScreen = () => {
    const [showSearch,setShowSearch] = useState(false)
    const [locations,setLocations] = useState([])
    const [weather,setWeather] = useState({})
    const [loading,setLoading] = useState(true)

    
    const handleLocation = (location)=>{
        // setLocations([]);
        setShowSearch(false);
        setLoading(true)
        GetWeatherForecast({
            cityName:location.name,
            days:'7'
        }).then((data)=>{
            setWeather(data);
            storeData('city',location.name)
            setLoading(false)
        })
    }
    
    const handleSearch = (value)=>{
        // get locations
        if(value.length>2){
            GetLocations({cityName:value}).then((data)=>{
                setLocations(data);
            })
        }
    }

    const handleText = useCallback(debounce(handleSearch, 400), []);

    const { current, location } = weather;

    useEffect(()=>{
        GetWeatherData();
    },[])

    const GetWeatherData = async ()=>{
        let myCity = await getData('city');
        let cityName = 'القاهرة';
        if(myCity) cityName = myCity;
        
        GetWeatherForecast({
            cityName,
            days:'7'
        }).then((data)=>{
            setWeather(data)
            setLoading(false)
        })
    }

    return (
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image blurRadius={70} source={require('../assets/images/bg.png')} className="absolute h-full w-full"/>
            
            {
                loading ? 
                (
                    <View className="flex-1 flex-row justify-center items-center">
                        <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2"/>
                    </View>
                ) :
                (
                    <SafeAreaView className="flex flex-1 pt-14 px-4">
                        <View style={{height:'7%'}}>

                            <View style={{backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent'}} className="flex-row justify-end items-center rounded-full z-10">
                                {
                                    showSearch ? (
                                        <TextInput 
                                        onChangeText={handleText}
                                        className="text-white text-base flex-1 h-10 pb-1 pl-6" placeholder='Search City' placeholderTextColor={'lightgray'} />
                                    ) : null
                                }
                                <TouchableOpacity 
                                    onPress={()=>setShowSearch(!showSearch)} 
                                    className="rounded-full p-3 m-1" 
                                    style={{backgroundColor:theme.bgWhite(0.3)}}
                                    >
                                    <MagnifyingGlassIcon size={25} color="white" />
                                </TouchableOpacity>
                            </View>
                            
                            {
                                locations.length > 0 && showSearch ? (
                                    <View className="absolute w-full bg-gray-200 top-16 rounded-3xl z-10">
                                        {
                                            locations.map((item,index)=>{
                                                let showBorder = index + 1 != locations.length;
                                                let boderClass = showBorder ? 'border-b-2 border-b-gray-300' : '';
                                                
                                                return  (
                                                    <TouchableOpacity 
                                                        onPress={()=>handleLocation(item)} 
                                                        key={index} 
                                                        className={`flex-row items-center border-0 p-3 px-4 mb-1 ${boderClass}`}
                                                        >
                                                        <MapPinIcon size={20} color="gray"/>
                                                        <Text className="text-black text-lg ml-2">{item?.name}, {item?.country}</Text>
                                                    </TouchableOpacity>
                                                )
                                                }
                                            )
                                        }
                                    </View>
                                ):null
                            }
                            </View>

                        {/* section */}
                        <View className="flex justify-around flex-1 mx-4 mb-2">
                            {/* location */}
                            <Text className="text-white text-center text-2xl font-bold">
                                {location?.name},
                                
                                <Text className="text-lg font-semibold text-gray-300">
                                    {" "+ location?.country}
                                </Text>
                            </Text>
                            {/* image */}
                            <View className="flex-row justify-center">
                                {/* source={{uri:`https:${current?.condition?.icon}`}} */}
                                {/* source={weatherImages[current?.condition?.text]} */}
                                <Image className="w-52 h-52" source={weatherImagesAr[current?.condition?.code]} />
                            </View>
                            {/* details */}
                            <View className="space-y-2">
                                <Text className="text-center font-bold text-white text-6xl ml-5">
                                    {current?.temp_c}&#176;
                                </Text>
                                <Text className="text-center font-bold text-white text-xl tracking-widest">
                                    {current?.condition?.text}
                                </Text>
                            </View>
                            {/* other status */}
                            <View className="flex-row justify-between mx-4">
                                <View className="flex-row space-x-2 items-center">
                                    <Image source={require('../assets/icons/wind.png')} className="h-6 w-6" />
                                    <Text className="text-white font-semibold text-base">
                                        {current?.wind_kph}km
                                    </Text>
                                </View>

                                <View className="flex-row space-x-2 items-center">
                                    <Image source={require('../assets/icons/drop.png')} className="h-6 w-6" />
                                    <Text className="text-white font-semibold text-base">
                                        {current?.humidity}%
                                    </Text>
                                </View>

                                <View className="flex-row space-x-2 items-center">
                                    <Image source={require('../assets/icons/sun.png')} className="h-6 w-6" />
                                    <Text className="text-white font-semibold text-base">
                                        {weather?.forecast?.forecastday[0]?.astro?.sunrise}
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
                            
                                {
                                    weather?.forecast?.forecastday?.map((item,index)=>{
                                        let date = new Date(item?.date);
                                        let options = {weekday:'long'};
                                        let dayName = date.toLocaleDateString('en-US',options)
                                        dayName = dayName.split(',')[0]
                                        return(
                                            <View 
                                            key={index}
                                            style={{backgroundColor:theme.bgWhite(0.15)}}
                                            className="flex justify-center w-24 rounded-3xl py-3 space-y-1 mr-4 items-center"
                                            >
                                                {/* source={weatherImagesAr[item?.day?.condition?.text]} */}
                                                {/* source={{uri:`https:${item?.day?.condition?.icon}`}} */}
                                                <Image className="w-11 h-11" source={weatherImagesAr[item?.day?.condition?.code]}/>
                                                <Text className="text-white">
                                                    {dayName}
                                                </Text>
                                                <Text className="text-white text-xl font-semibold">
                                                    {item?.day?.avgtemp_c}&#176;
                                                </Text>
                                            </View>
                                        )
                                    })
                                }
                            
                            </ScrollView>

                        </View>
                    </SafeAreaView>
                )
            }

            
            
        </View>
    )
}

export default HomeScreen