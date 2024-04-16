import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";

function TransTabComp() {
    const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

    const sourceMoney = useSelector((state) => state.wallet.money); // observer
    const exchangeRate = useSelector((state) => state.wallet.exchangeRate);
    const targetCurrencies = useSelector((state) => state.wallet.targetCurrencies);

    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    return (
        <div>
            <div>
                <ul>
                    {targetCurrencies.map((currency, idx) => (
                        <li onClick={(e) => setSelectedCurrency(currency)}>{currency}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p>
                    {selectedCurrency} {sourceMoney * exchangeRate[selectedCurrency]}
                </p>
                <p>기준일: {dayjs(new Date()).format("YYYY-MMM-DD")}</p>
            </div>
        </div>
    );
}

export default TransTabComp;
