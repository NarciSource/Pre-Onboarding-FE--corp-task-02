import fetch from "node-fetch";
import fs from "fs";

async function todayExchange() {
    const base = "USD";
    const symbols = ["CAD", "KRW", "HKD", "JPY", "CNY"];
    const apikey = process.env.REACT_APP_APILAYER_APIKEY;
    const url = `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols.toString()}&base=${base}`;
    const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: {
            apikey,
        },
    };

    const response = await fetch(url, requestOptions);
    const data = await response.json();

    fs.writeFileSync("todayExchangeRates.json", JSON.stringify(data, null, 2));
}

todayExchange();
