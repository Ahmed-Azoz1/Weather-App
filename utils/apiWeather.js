import axios from "axios";
import {forecastEndpoint,locationsEndpoint} from './axiosWeather'


const apiCall = async (endPoint)=>{
    const options = {
        method:'GET',
        url:endPoint
    }
    try {
        const req = await axios.request(options);
        return req.data;
    } catch (error) {
        console.log('error',error)
        return null;
    }
}

const GetWeatherForecast = (params)=>{
    return apiCall(forecastEndpoint(params))
}

const GetLocations = (params)=>{
    return apiCall(locationsEndpoint(params))
}

export {GetWeatherForecast,GetLocations}