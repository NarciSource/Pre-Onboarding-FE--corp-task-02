import { useState } from "react";

function InputComp() {
    const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

    const [money, setMoney] = useState(0);
    const [targetCurrency, setTargetCurrecny] = useState(currencies[0]);

    return (
        <div>
            <input value={money} onChange={(e) => setMoney(e.target.value)}></input>
            <select value={targetCurrency} onChange={(e) => setTargetCurrecny(e.target.value)}>
                {currencies.map((currency, idx) => (
                    <option value={currency}> {currency}</option>
                ))}
            </select>
        </div>
    );
}

export default InputComp;
