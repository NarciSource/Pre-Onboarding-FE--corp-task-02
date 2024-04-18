import { useSelector, useDispatch } from "react-redux";
import { setMoney, setCurrency } from "../redux/slices/wallet";
import styled from "styled-components";

function MoneyComp() {
    // noticer
    const dispatch = useDispatch();
    // observer
    const money = useSelector((state) => state.wallet.money);
    const currency = useSelector((state) => state.wallet.currency);
    const targetCurrencies = useSelector((state) => state.wallet.targetCurrencies);

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
