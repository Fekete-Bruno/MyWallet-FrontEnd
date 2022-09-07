import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/globalStyles";
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
                </Routes>
            </BrowserRouter>
        </>
    );
}