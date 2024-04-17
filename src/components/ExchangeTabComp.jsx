import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ExchangeTabComp() {
    const sourceMoney = useSelector((state) => state.wallet.money); // observer
    const exchangeRate = useSelector((state) => state.wallet.exchangeRate);
    const updateAt = useSelector((state) => state.wallet.updateAt);
    const targetCurrencies = useSelector((state) => state.wallet.targetCurrencies);

    const [selectedCurrency, setSelectedCurrency] = useState(targetCurrencies[0]);
    const exchangedMoney = sourceMoney * exchangeRate[selectedCurrency];

    return (
        <TabDiv>
            <TabMenu>
                {targetCurrencies.map((currency, idx) => (
                    <li key={idx} className={currency === selectedCurrency ? "selected" : ""} onClick={(e) => setSelectedCurrency(currency)}>
                        {currency}
                    </li>
                ))}
            </TabMenu>
            <TabContents>
                <p className="exchangeContent">
                    {selectedCurrency} {typeof exchangedMoney === "number" ? exchangedMoney : "?"}
                </p>
                <p>
                    기준일: <br />
                    {dayjs(new Date(updateAt)).format("YYYY-MMM-DD")}
                </p>
            </TabContents>
        </TabDiv>
    );
}

const borderColor = "darkgray";

const TabDiv = styled.div`
    margin: 30px 0 0 0;
    border: 2px solid ${borderColor};
`;

const TabMenu = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    height: 40px;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    li:not(:last-child) {
        border-right: 2px solid ${borderColor};
    }
    li:not(.selected) {
        border-bottom: 2px solid ${borderColor};
    }
`;

const TabContents = styled.div`
    padding: 20px;

    .exchangeContent {
        font-size: 20px;
        font-weight: bold;
    }
`;

export default ExchangeTabComp;
