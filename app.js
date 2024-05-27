const apiKey = '2469e1766bbe721f1159ebc8'; // Your ExchangeRate-API key
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/GBP`;

let currentRate = 0;

async function fetchExchangeRate() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        currentRate = data.conversion_rates.BDT;
        document.getElementById('rate').textContent = `1 GBP = ${currentRate} BDT`;
        calculateConversion(); // Update conversion in case amount was already entered
    } catch (error) {
        document.getElementById('rate').textContent = 'Error fetching rate';
        console.error('Error fetching exchange rate:', error);
    }
}

function calculateConversion() {
    const amount = document.getElementById('amount').value;
    if (amount) {
        const convertedAmount = amount * currentRate;
        document.getElementById('convertedAmount').textContent = `${amount} GBP = ${convertedAmount.toFixed(2)} BDT`;
    } else {
        document.getElementById('convertedAmount').textContent = '';
    }
}

// Fetch the exchange rate when the page loads
fetchExchangeRate();
