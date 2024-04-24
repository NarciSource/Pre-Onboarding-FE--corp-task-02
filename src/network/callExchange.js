export default async function callExchange({ base, symbols }) {
    const url = `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols.toString()}&base=${base}`;
    const requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: {
            apikey: process.env.APILAYER_APIKEY,
        },
    };

    const response = await fetch(url, requestOptions);
    return response.json();
}
