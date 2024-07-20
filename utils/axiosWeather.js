const {default:axios} = require('axios') // import axios

const apikey=;
const apiUrl=;


const axiosWeather = axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization: `Bearer ${apikey}`
    }
})



export default axiosWeather