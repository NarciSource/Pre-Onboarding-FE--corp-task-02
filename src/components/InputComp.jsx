import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMoney, setCurrency, fetchExchange } from "../redux/slices/wallet";
import styled from "styled-components";

function InputComp() {
    const dispatch = useDispatch(); // noticer
    const sourceMoney = useSelector((state) => state.wallet.money); // observer
    const sourceCurrency = useSelector((state) => state.wallet.currency);
    const targetCurrencies = useSelector((state) => state.wallet.targetCurrencies);

    const setCurrencyWithExchange = (value) => (dispatch, getState) => {
        dispatch(setCurrency(value));
        dispatch(fetchExchange({ base: getState().wallet.currency, symbols: getState().wallet.targetCurrencies }));
    };

    useEffect(() => {
        dispatch(setCurrencyWithExchange(sourceCurrency));
    }, []);

    return (
        <InputDiv>
            <input value={sourceMoney} onChange={(e) => dispatch(setMoney(e.target.value))}></input>
            <select value={sourceCurrency} onChange={(e) => dispatch(setCurrencyWithExchange(e.target.value))}>
                {[sourceCurrency, ...targetCurrencies].map((currency, idx) => (
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

export default InputComp;
