import { useSelector, useDispatch } from "react-redux";
import { setMoney, setCurrency, fetchExchange } from "../redux/slices/wallet";
import styled from "styled-components";
import { useEffect } from "react";

function MoneyComp() {
    // noticer
    const dispatch = useDispatch();
    // observer
    const money = useSelector((state) => state.wallet.money);
    const currency = useSelector((state) => state.wallet.currency);
    const targetCurrencies = useSelector((state) => state.wallet.targetCurrencies);

    useEffect(() => {
        // fetchExchange after setMoney or setCurrency
        if (money >= 1000) {
            dispatch(fetchExchange({ base: currency, symbols: targetCurrencies }));
        }
    }, [money, currency]);

    return (
        <InputDiv>
            <input value={Intl.NumberFormat().format(money)} onChange={(e) => dispatch(setMoney(e.target.value))}></input>
            <select value={currency} onChange={(e) => dispatch(setCurrency(e.target.value))}>
                {[currency, ...targetCurrencies].map((currency, idx) => (
                    <option value={currency} key={idx}>
                        {currency}
                    </option>
                ))}
            </select>
        </InputDiv>
    );
}

const InputDiv = styled.div`
    display: flex;
    justify-content: space-around;

    input {
        height: 30px;
        padding: 0 0 0 10px;
    }
    select {
        padding: 0 10px;
    }
`;

export default MoneyComp;
