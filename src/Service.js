import axios from "axios";

class Converter {
    static async getConvert(from = 'USD' , to = 'AZN' , amount = 1) {
       return axios.get(`https://api.apilayer.com/exchangerates_data/convert?apikey=jStaVZxcYgcarYCVxCiVGUZHKN4jzLYD&to=${to}&from=${from}&amount=${amount}`)
    }
}


export default Converter