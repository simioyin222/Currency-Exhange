export default class ExchangeService {
  static getConversionRate(baseAmount, baseCode, targetCode) {
    const API_KEY = '0730e5c64ea66bb10852fe7b';
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${"USD"}/${targetCode}/${100}`;
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          return response.json().then(function (apiResponse) {
            let apiError = apiResponse["error-type"];
            if (response.status === 404) {
              apiError = "Currency not found.";
            }
            const errorMessage = `${response.status}: ${apiError}`;
            throw new Error(errorMessage);
          });
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }

  static getSupportedCodes() {
    const API_KEY = '0730e5c64ea66bb10852fe7b';
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          return response.json().then(function (apiResponse) {
            const errorMessage = `${response.status}: ${apiResponse["error-type"]}`;
            throw new Error(errorMessage);
          });
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}