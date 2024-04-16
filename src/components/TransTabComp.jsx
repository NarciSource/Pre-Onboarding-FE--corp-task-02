import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";

function TransTabComp() {
    const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

    const sourceMoney = useSelector((state) => state.wallet.money); // observer
    const sourceCurrency = useSelector((state) => state.wallet.currency);
    const exchange = useSelector((state) => state.wallet.exchange);

    const [targetCurrency, setTargetCurrency] = useState(currencies[0]);

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
                    {targetCurrency} {sourceMoney * exchange[targetCurrency]}
                </p>
                <p>기준일: {dayjs(new Date()).format("YYYY-MMM-DD")}</p>
            </div>
        </div>
    );
}

export default TransTabComp;
