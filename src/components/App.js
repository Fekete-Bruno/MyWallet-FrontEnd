import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/globalStyles";
import Login from "./Login";

export default function App(){

    return(

        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />  
                </Routes>
            </BrowserRouter>
        </>
    );
}