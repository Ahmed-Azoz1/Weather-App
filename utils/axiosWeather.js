const {default:axios} = require('axios') // import axios

const weatherImages = { 
    'Partly cloudy': require('../assets/images/partlycloudy.png'),
    'Moderate rain': require('../assets/images/moderaterain.png'),
    'Patchy rain possible': require('../assets/images/moderaterain.png'),
    'Sunny': require('../assets/images/sun.png'),
    'Clear': require('../assets/images/sun.png'),
    'Overcast': require('../assets/images/cloud.png'),
    'Cloudy': require('../assets/images/cloud.png'),
    'Light rain': require('../assets/images/moderaterain.png'),
    'Moderate rain at times': require('../assets/images/moderaterain.png'),
    'Heavy rain': require('../assets/images/heavyrain.png'),
    'Heavy rain at times': require('../assets/images/heavyrain.png'),
    'Moderate or heavy freezing rain': require('../assets/images/heavyrain.png'),
    'Moderate or heavy rain shower': require('../assets/images/heavyrain.png'),
    'Moderate or heavy rain with thunder': require('../assets/images/heavyrain.png'),
    'other': require('../assets/images/moderaterain.png') 
}

const apikey='7b6af9a0f52063df83359e1af4af6064';
const apikey2 = '944c6aabc9bd4c569cd204241242007';  // weatherapi
// const apiUrl='https://api.openweathermap.org/data/2.5/';


// const axiosWeather = axios.create({
//     baseURL:apiUrl,
//     params: {
//         appid: apikey,
//         lang: 'ar'
//     }
// })

const forecastEndpoint = (params)=>`https://api.weatherapi.com/v1/current.json?key=${apikey2}&q=${params.cityName}&days=${params.days}&lang=ar&aqi=no&alerts=no`
const locationsEndpoint = (params)=>`https://api.weatherapi.com/v1/current.json?key=${apikey2}&q=${params.cityName}&lang=ar`



export {forecastEndpoint,locationsEndpoint}