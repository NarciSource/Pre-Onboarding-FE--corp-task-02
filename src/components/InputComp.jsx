import { useSelector, useDispatch } from "react-redux";
import { setMoney, setCurrency } from "../redux/slices/wallet";
import ExchangeComp from "./ExchangeComp";

function InputComp() {
    const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

    const dispatch = useDispatch(); // noticer
    const sourceMoney = useSelector((state) => state.wallet.money); // observer
    const sourceCurrency = useSelector((state) => state.wallet.currency);

    return (
        <div>
            <input value={sourceMoney} onChange={(e) => dispatch(setMoney(e.target.value))}></input>
            <select value={sourceCurrency} onChange={(e) => dispatch(setCurrency(e.target.value))}>
                {currencies.map((currency, idx) => (
                    <option value={currency}> {currency}</option>
                ))}
            </select>
            <ExchangeComp></ExchangeComp>
        </div>
    );
}

export default InputComp;
