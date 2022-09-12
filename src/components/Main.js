import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getLogs } from "../services/axiosHandler";
import Box from "./Box";
import Buttons from "./Buttons";


export default function Main(){
    const {setAuth} = useContext(UserContext);
    const navigate = useNavigate();
    const [userData,setUserData] = useState({name:'loading...',logs:[]});
    let finalValue = 0;

    useEffect(()=>{
        const promise = getLogs();
        promise.then((res)=>{
            setUserData(res.data);
        }).catch(noAuth);
    },[]);
        
    userData.logs.map((log)=>{
        finalValue+=log.value;
    });

    function returnToLogin(){
        setAuth(null);
        localStorage.clear("mywallet");
        navigate("/");
    }

    function noAuth(){
        setAuth(null);
        localStorage.clear("mywallet");
        navigate("/no-auth");
    }

    return(
        <MainWrapper>
            
            <MainTitle>
                <div>Hello, {userData.name}</div>
                <div onClick={returnToLogin}><ion-icon name="exit-outline"></ion-icon></div>
            </MainTitle>
            <Box logs={userData.logs} finalValue={finalValue}/>
            <Buttons />
            
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    width: 90vw;
    height: 95vh;
    margin: 2.5vh auto;
    display: flex;
    flex-direction: column;
`;
const MainTitle = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    font-weight: 700;
    font-size: 4vh;
    margin: 2vh 0;
    div{
        display: flex;
        align-items: center;
    }
    ion-icon{
        font-size: 5vh;
    }
`;