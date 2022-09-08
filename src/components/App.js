import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/globalStyles";
import Expense from "./Expense";
import Income from "./Income";
import Login from "./Login";
import Main from "./Main";
import Signup from "./Signup";

export default function App(){

    return(

        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/income" element={<Income />} />
                    <Route path="/expense" element={<Expense />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}