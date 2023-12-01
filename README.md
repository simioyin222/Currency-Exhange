# Currency Exchange Calculator
By Similoluwa Oyinkolade

A web application for currency exchange, leveraging real-time data from the Exchange Rate API.

## Technologies Used
- HTML
- CSS
- JavaScript
- Fetch API
- Exchange Rate API
- Node v16.13.1
- npm v8.1.2
- webpack v4.46.0

## Description
This JavaScript web application offers a user-friendly interface for calculating exchange rates between various currencies. It uses the Exchange Rate API to obtain up-to-date conversion data.

The application features a simple interface where users can select a base currency, enter an amount for conversion, and choose a target currency. After clicking the "Exchange" button, the application displays the equivalent amount in the selected target currency along with the current exchange rate.

By default, the application sets the base currency to USD (United States Dollar) and the target currency to EUR (Euro) upon the user's first visit.

Additionally, it dynamically generates dropdown menus listing all available currencies, allowing users to easily choose both the base and target currencies.

## Setup/Installation Requirements
1. Copy the URL of this repository.
2. Open Terminal.
3. Change your working directory to where you want the cloned directory.
4. Type `git clone`, and paste the URL.
5. Press Enter to create your local clone. Or use the command: $ git clone https://github.com/[simioyin222]/currency-exchange.git
6. Get your own API key for the project's API by visiting [the API website](https://app.exchangerate-api.com/dashboard).
7. Create an account on the site and get your API key.
8. Navigate to the root of the cloned directory.
9. Create an `.env` file and add your API key: API_KEY=[YOUR-API-KEY-HERE]

markdown
Copy code
Replace `[YOUR-API-KEY-HERE]` with your actual API Key.
10. Ensure `.env` is listed in the project's `.gitignore`.
11. Install project dependencies using Node.js and npm:
 ```
 $ npm install
 ```
12. Build the application using webpack:
 ```
 $ npm run build
 ```
13. Optionally, run the following commands:
 - Lint JavaScript source code:
   ```
   $ npm run lint
   ```
 - Run tests with Jest:
   ```
   $ npm run test
   ```
 - Run a live server:
   ```
   $ npm run start
   ```

## Known Bugs
No known bugs at this time. For bug reports, please contact the author.

## License
MIT License

Copyright (c) 11/17/2023 Similoluwa Oyinkolade

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.