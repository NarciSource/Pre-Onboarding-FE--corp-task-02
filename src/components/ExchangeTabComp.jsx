import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ColorRing } from "react-loader-spinner";

function ExchangeTabComp() {
    const sourceMoney = useSelector((state) => state.wallet.money); // observer
    const exchangeRate = useSelector((state) => state.wallet.exchangeRate);
    const updateAt = dayjs(new Date(useSelector((state) => state.wallet.updateAt)));
    const targetCurrencies = useSelector((state) => state.wallet.targetCurrencies);
    const status = useSelector((state) => state.wallet.status);

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
            <LoaderContianer>
                <ColorRing visible={status === "loading"} />
            </LoaderContianer>
            <TabContents>
                <p className="exchangeContent">
                    {selectedCurrency} {exchangedMoney || "?"}
                </p>
                <p>
                    기준일: <br />
                    {updateAt.isValid() ? updateAt.format("YYYY-MMM-DD") : "?"}
                </p>
            </TabContents>
        </TabDiv>
    );
}

const borderColor = "darkgray";

const TabDiv = styled.div`
    position: relative;
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

const LoaderContianer = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% - 40px);

    svg {
        width: 100%;
        height: 100%;
    }
`;

export default ExchangeTabComp;
