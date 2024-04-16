import { useState } from "react";
import { useSelector } from "react-redux";

function TransTabComp() {
    const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

    const sourceMoney = useSelector((state) => state.wallet.money); // observer
    const sourceCurrency = useSelector((state) => state.wallet.currency);

    const [targetCurrency, setTargetCurrency] = useState(currencies[0]);
    const [transMoney, setTransMoney] = useState(0);

    return (
        <div>
            <div>
                <ul>
                    {currencies
                        .filter((currency) => currency !== sourceCurrency)
                        .map((currency, idx) => (
                            <li onClick={(e) => setTargetCurrency(currency)}>{currency}</li>
                        ))}
                </ul>
            </div>
            <div>
                <p>
                    {sourceCurrency}에서 {targetCurrency}로 환전
                </p>
                <p>
                    환전금액: {sourceMoney} {transMoney}
                </p>
                <p>기준일: {new Date().toString()}</p>
            </div>
        </div>
    );
}

export default TransTabComp;
