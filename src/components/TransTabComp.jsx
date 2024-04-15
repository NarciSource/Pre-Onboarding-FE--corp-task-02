import { useState } from "react";

function TransTabComp() {
    const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];

    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const [transMoney, setTransMoney] = useState(0);

    return (
        <div>
            <div>
                <ul>
                    {currencies.map((currency, idx) => (
                        <li onClick={(e) => setSelectedCurrency(currency)}>{currency}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p>
                    환전금액: {selectedCurrency} {transMoney}
                </p>
                <p>기준일: {new Date().toString()}</p>
            </div>
        </div>
    );
}

export default TransTabComp;
