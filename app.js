

async function coinGecko() {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=php&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false')
    const data = await res.json();
    console.log(data);
}

console.log('asfasf');
coinGecko();