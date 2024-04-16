import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setExchange } from "../redux/slices/wallet";
import callExchange from "../network/callExchange";

function ExchangeComp() {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
            const exchangeResult = await callExchange("USD", currencies);

            dispatch(setExchange(exchangeResult.rates));
        })();
    }, []);

    return null;
}

export default ExchangeComp;
