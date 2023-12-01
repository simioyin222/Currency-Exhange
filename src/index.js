import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getConversionRate, getSupportedCodes } from './js/exchange';

export function createSelectionForms(supportedCodes) {
  const selectTargetCurrency = document.getElementById('target-currency');
  selectTargetCurrency.innerHTML = '';

  supportedCodes.forEach(codePair => {
    const [code, name] = codePair;
    const option = document.createElement('option');
    option.value = code;
    option.textContent = `${code} - ${name}`;
    selectTargetCurrency.appendChild(option);
  });
}


function clearResults() {
  document.getElementById('result-message').innerText = 'Converted amount will be displayed here.';
}

export function displayConversion(response, base, query) {
  const resultMessage = document.getElementById('result-message');
  if (response.result === 'success') {
    resultMessage.innerText = `Converted amount in ${query}: ${response.conversion_result}`;
  } else {
    resultMessage.innerText = `Error converting ${base} to ${query}: ${response.error_info}`;
  }
}

export function displayError(error, base, query) {
  const resultMessage = document.getElementById('result-message');
  resultMessage.innerText = `Error converting ${base} to ${query}: ${error.message}`;
}

document.getElementById('conversion-form').addEventListener('submit', function(event) {
  event.preventDefault();
  clearResults();
  const baseAmount = document.getElementById('usd-amount').value;
  const targetCurrency = document.getElementById('target-currency').value;
  getConversionRate(baseAmount, 'USD', targetCurrency);
});

document.addEventListener('DOMContentLoaded', () => {
  getSupportedCodes();
});