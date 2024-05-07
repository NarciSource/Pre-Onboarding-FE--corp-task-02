import fetch from "node-fetch";
import fs from "fs";

async function todayExchange() {
    try {
        const apikey = process.env.REACT_APP_APILAYER_APIKEY;
        const symbols = ["CAD", "KRW", "HKD", "JPY", "CNY"];
        let multiple_data = {};

        for (const base of symbols) {
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
            multiple_data[base] = data;
        }

        fs.writeFileSync("todayExchangeRates.json", JSON.stringify(multiple_data, null, 2));
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

todayExchange();
