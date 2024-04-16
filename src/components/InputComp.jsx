import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMoney, setCurrency, fetchExchange } from "../redux/slices/wallet";

function InputComp() {
    const dispatch = useDispatch(); // noticer
    const sourceMoney = useSelector((state) => state.wallet.money); // observer
    const sourceCurrency = useSelector((state) => state.wallet.currency);
    const targetCurrencies = useSelector((state) => state.wallet.targetCurrencies);

    useEffect(() => {
        dispatch(fetchExchange({ base: sourceCurrency, symbols: targetCurrencies }));
    }, []);

    return (
        <div>
            <input value={sourceMoney} onChange={(e) => dispatch(setMoney(e.target.value))}></input>
            <select
                value={sourceCurrency}
                onChange={(e) => {
                    dispatch(setCurrency(e.target.value));
                    dispatch(fetchExchange({ base: sourceCurrency, symbols: targetCurrencies }));
                }}
            >
                {[sourceCurrency, ...targetCurrencies].map((currency, idx) => (
                    <option value={currency}> {currency}</option>
                ))}
            </select>
        </div>
    );
}

export default InputComp;
