export default async function callExchange({ base, symbols }) {
    const apikey = process.env.REACT_APP_APILAYER_APIKEY;
    const url = apikey ? `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols.toString()}&base=${base}`
                       : "/todayExchangeRates.json";
    const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: {
            apikey,
        },
    };

    const response = await fetch(url, requestOptions);
    return response.json();
}
