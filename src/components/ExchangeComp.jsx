import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchExchange } from "../redux/slices/wallet";

function ExchangeComp() {
    const dispatch = useDispatch();

    useEffect(() => {
        const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
        dispatch(fetchExchange({ base: "USD", symbols: currencies }));
    }, []);

    return null;
}

export default ExchangeComp;
