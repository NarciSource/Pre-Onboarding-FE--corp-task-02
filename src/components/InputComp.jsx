import { useSelector, useDispatch } from "react-redux";
import { setMoney } from "../redux/modules/wallet";
import { setCurrency } from "../redux/modules/wallet";

function InputComp() {
    const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

    const dispatch = useDispatch(); // noticer
    const money = useSelector((state) => state.wallet.money); // observer
    const sourceCurrency = useSelector((state) => state.wallet.currency);

    return (
        <div>
            <input value={money} onChange={(e) => dispatch(setMoney(e.target.value))}></input>
            <select value={sourceCurrency} onChange={(e) => dispatch(setCurrency(e.target.value))}>
                {currencies.map((currency, idx) => (
                    <option value={currency}> {currency}</option>
                ))}
            </select>
        </div>
    );
}

export default InputComp;
