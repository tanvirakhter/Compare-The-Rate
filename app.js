const apiKey = '2469e1766bbe721f1159ebc8'; // Your ExchangeRate-API key
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/GBP`;

async function fetchExchangeRate() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const rate = data.conversion_rates.BDT;
        document.getElementById('rate').textContent = `1 GBP = ${rate} BDT`;
    } catch (error) {
        document.getElementById('rate').textContent = 'Error fetching rate';
        console.error('Error fetching exchange rate:', error);
    }
}

// Fetch the exchange rate when the page loads
fetchExchangeRate();
