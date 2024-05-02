import MoneyComp from "./components/MoneyInputComp";
import ExchangeTabComp from "./components/ExchangeTabComp";
import styled from "styled-components";

function App() {
    return (
        <AppDiv>
            <MoneyComp></MoneyComp>
            <ExchangeTabComp></ExchangeTabComp>
        </AppDiv>
    );
}

const AppDiv = styled.div`
    width: 300px;
    height: 300px;
    border: 3px solid gray;
    margin: 20px;
    padding: 20px;
`;

export default App;
