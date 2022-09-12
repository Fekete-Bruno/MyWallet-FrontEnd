import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { GlobalStyle } from "../styles/globalStyles";
import Logs from "./Logs"
import Login from "./Login";
import Main from "./Main";
import PrivatePage from "./PrivatePage";
import Signup from "./Signup";

export default function App(){
    const [auth,setAuth] = useState(null);
    const localData = localStorage.getItem(("mywallet"));

    if(localData&&!auth){
        setAuth(localData);        
    }

    console.log(auth);

    return(

        <UserContext.Provider value={{auth,setAuth}}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/log-in" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/main" element={
                        <PrivatePage>
                            <Main />
                        </PrivatePage>
                    } />
                    <Route path="/income" element={
                        <PrivatePage>
                            <Logs type="Income"/>
                        </PrivatePage>
                    } />
                    <Route path="/expense" element={
                        <PrivatePage>
                            <Logs type={"Expense"} />
                        </PrivatePage>
                    } />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}