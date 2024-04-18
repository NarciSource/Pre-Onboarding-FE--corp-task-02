import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import styled from "styled-components";
import dayjs from "dayjs";
import { ColorRing } from "react-loader-spinner";
import callExchange from "../network/callExchange";

function useReduxReflatedState(initialSelector) {
    const reduxState = useSelector(initialSelector);
    const [state, setState] = useState(reduxState[0]);

    useEffect(() => setState(reduxState.includes(state) ? state : reduxState[0]), [state, reduxState]);
    return [state, setState];
}
function ExchangeTabComp() {
    // observer
    const sourceMoney = useSelector((state) => state.wallet.money);
    const sourceCurrency = useSelector((state) => state.wallet.currency);
    const targetCurrencies = useSelector((state) => state.wallet.targetCurrencies);
    // useState
    const [selectedCurrency, setSelectedCurrency] = useReduxReflatedState((state) => state.wallet.targetCurrencies);
    // useQuery
    const queryFn = () => callExchange({ base: sourceCurrency, symbols: targetCurrencies });
    const { isFetching, data } = useQuery(["apiData", sourceMoney, sourceCurrency, targetCurrencies], queryFn, {
        enabled: sourceMoney >= 1000,
        refetchOnWindowFocus: false,
        refetchInterval: 5 * 60 * 1000,
        retry: 0,
        initialData: {
            date: null,
            rates: {},
        },
    });
    const exchangeRate = data.rates;
    const updateAt = data.date && dayjs(new Date(data.date));
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
                <ColorRing visible={isFetching} />
            </LoaderContianer>
            <TabContents>
                <p className="exchangeContent">
                    {selectedCurrency} {exchangedMoney || "?"}
                </p>
                <p>
                    기준일: <br />
                    {updateAt?.format("YYYY-MMM-DD") || "?"}
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
