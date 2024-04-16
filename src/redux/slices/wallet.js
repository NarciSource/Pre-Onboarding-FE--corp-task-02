import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import callExchange from "../../network/callExchange";

const currencies = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
const default_currency = currencies[0];
const initialState = {
    money: 0,
    currency: default_currency,
    targetCurrencies: currencies.filter((currency) => currency !== default_currency),
    exchangeRate: {},
    status: "prepare",
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
                state.money = Intl.NumberFormat().format(money > 1000 ? 1000 : money);
            }
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
            state.targetCurrencies = currencies.filter((currency) => currency !== state.currency);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExchange.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchExchange.fulfilled, (state, action) => {
                state.status = "succeeded";
                console.log("api call succeeded", action.payload);
                state.exchangeRate = action.payload.rates;
            })
            .addCase(fetchExchange.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const fetchExchange = createAsyncThunk("GET/exchange", (args, thunkAPI) => callExchange(args));
export const { setMoney, setCurrency } = walletSlice.actions;
export default walletSlice.reducer;
