import "./App.css";
import InputComp from "./components/InputComp";
import TransTabComp from "./components/TransTabComp";
import styled from "styled-components";

function App() {
    return (
        <AppDiv>
            <InputComp></InputComp>
            <TransTabComp></TransTabComp>
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
