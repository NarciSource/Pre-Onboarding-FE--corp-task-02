import keys from "../keys.json";
export default async function callExchange(base, symbols) {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: {
            apikey: keys.APILAYER_APIKEY,
        },
    };

    return (await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols.toString()}&base=${base}`, requestOptions)).json();
}
