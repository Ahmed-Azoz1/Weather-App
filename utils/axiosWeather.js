const weatherImagesEng = { 
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

// const weatherImagesAr = { 
//     'غائم جزئيًا': require('../assets/images/partlycloudy.png'),
//     'مطر معتدل': require('../assets/images/moderaterain.png'),
//     'مطر متقطع ممكن': require('../assets/images/moderaterain.png'),
//     'مشمس': require('../assets/images/sun.png'),
//     'صافي': require('../assets/images/sun.png'),
//     'غائم كليا': require('../assets/images/cloud.png'),
//     'غائم': require('../assets/images/cloud.png'),
//     'مطر خفيف': require('../assets/images/moderaterain.png'),
//     'مطر معتدل في بعض الأحيان': require('../assets/images/moderaterain.png'),
//     'مطر غزير': require('../assets/images/heavyrain.png'),
//     'مطر غزير في بعض الأحيان': require('../assets/images/heavyrain.png'),
//     'مطر معتدل أو غزير مع تجمد': require('../assets/images/heavyrain.png'),
//     'مطر معتدل أو غزير مع عواصف رعدية': require('../assets/images/heavyrain.png'),
//     'مطر معتدل أو غزير مع عواصف رعدية': require('../assets/images/heavyrain.png'),
//     'أخرى': require('../assets/images/moderaterain.png') 
// }

const weatherImagesAr = { 
    1000: require('../assets/images/sun.png'), // صافي
    1003: require('../assets/images/partlycloudy.png'), // غائم جزئيًا
    1006: require('../assets/images/cloud.png'), // غائم
    1009: require('../assets/images/cloud.png'), // غائم كليًا
    1030: require('../assets/images/mist.png'), // ضباب
    1135: require('../assets/images/mist.png'), // ضباب كثيف
    1063: require('../assets/images/moderaterain.png'), // مطر خفيف
    1072: require('../assets/images/moderaterain.png'), // مطر معتدل
    1087: require('../assets/images/heavyrain.png'), // مطر غزير
    1117: require('../assets/images/heavyrain.png'), // مطر معتدل أو غزير مع تجمد أو عواصف رعدية
    'default': require('../assets/images/moderaterain.png') // أخرى
};

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
// &lang=ar
const forecastEndpoint = (params)=>`https://api.weatherapi.com/v1/forecast.json?key=${apikey2}&q=${params.cityName}&days=${params.days}&lang=ar&aqi=no&alerts=no`
const locationsEndpoint = (params)=>`https://api.weatherapi.com/v1/search.json?key=${apikey2}&q=${params.cityName}&lang=ar`



export {forecastEndpoint,locationsEndpoint,weatherImagesEng,weatherImagesAr}