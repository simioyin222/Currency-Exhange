import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getConversionRate, getSupportedCodes } from './js/exchange';

export function createSelectionForms(currencies) {
  const selectTargetCurrency = document.getElementById('target-currency');
  
  selectTargetCurrency.innerHTML = '';
  
  for (const currency in currencies) {
    const option = document.createElement('option');
    option.value = currency;
    option.textContent = currency;
    selectTargetCurrency.appendChild(option);
  }
}

function clearResults() {
  document.getElementById('result-message').innerText = 'Converted amount will be displayed here.';
}

export function displayConversion(response, base, query) {
  const resultMessage = document.getElementById('result-message');
  
  if (response.status === 'success') {
    resultMessage.innerText = `Converted amount in ${query}: ${response.converted_amount}`;
  } else {
    resultMessage.innerText = `Error converting ${base} to ${query}: ${response.error_info}`;
  }
}

export function displayError(error, base, query) {
  const resultMessage = document.getElementById('result-message');
  resultMessage.innerText = `Error converting ${base} to ${query}: ${error.message}`;
}

document.addEventListener('DOMContentLoaded', () => {
  getSupportedCodes();
});