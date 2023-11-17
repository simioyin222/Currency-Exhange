export default class ExchangeService {
  static getConversionRate(baseAmount, baseCode, targetCode) {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCode}/${targetCode}/${baseAmount}`;
    return fetch(url)
  }
}