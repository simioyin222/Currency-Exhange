export default class CurrencyExchangeService {
  static async getAvailableCurrencies() {
    const response = await fetch("https://v6.exchangerate-api.com/v6/48e7a012fc5cb0ad3fe17772/latest/USD")
    const data = await response.json(); 
  }
}