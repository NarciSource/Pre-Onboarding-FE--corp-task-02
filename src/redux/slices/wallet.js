import { createSlice } from "@reduxjs/toolkit";

const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
const defaultCurrency = currencies[0];
const initialState = {
    money: 0,
    currency: defaultCurrency,
    targetCurrencies: currencies.filter((currency) => currency !== defaultCurrency),
};

const walletSlice = createSlice({
    name: "WALLET",
    initialState,
    reducers: {
        setMoney: (state, action) => {
            const money = action.payload.replace(",", "");
            if (isNaN(money)) {
                console.log("숫자만 입력", money);
            } else {
                state.money = money;
            }
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
            state.targetCurrencies = currencies.filter((currency) => currency !== state.currency);
        },
    },
});

export const { setMoney, setCurrency } = walletSlice.actions;
export default walletSlice.reducer;
