import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Login(){

    const [disabled,setDisabled] = useState(false);
    const [innerButton,setInnerButton] = useState('Log In');
    const [form,setForm] = useState({});

    function sendForm(event){
        event.preventDefault();
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);

        //just for testing:::
        setTimeout(()=>{resetForm()},5000)
    }

    function handleForm({name,value}){
        setForm({
            ...form,
            [name]: value,
        });
    }

    function resetForm(resp){
        //errorMessage(resp);
        setDisabled(false);
        setInnerButton('Log In');
    }
    

    return(
        <FormWrapper>
            <h1>My Wallet</h1>
            <form onSubmit={sendForm}>

                <input type="email" placeholder="E-mail" required disabled={disabled} onChange={
                    (e)=>{
                        handleForm({
                            name: e.target.type,
                            value: e.target.value,
                        });
                    }
                }/>

                <input type="password" placeholder="Password" required disabled={disabled} onChange={
                (e)=>{
                    handleForm({
                        name:e.target.type,
                        value:e.target.value,
                    }
                    );
                }
                }/>

		        <button type="submit" disabled={disabled}>{innerButton}</button>

            </form>
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1{
        color: white;
        font-size: 5vh;
        font-family: 'Saira Stencil One', cursive;
    }

    input{
        border:none;
        border-radius: 5px;
        height: 10vh;
        margin:1vh 0;
        padding: 2vh;
        font-size: 3vh;
        color: black;
    }

    input::placeholder{
        color: black;
        opacity: 1;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(163, 40, 214, 1);
        border-radius: 5px;
        border: none;
        color: white;
        height: 7vh;
        font-weight: 700;
        font-size: 3vh;
        margin: 1vh 0;
    }

    button:hover{
        cursor: pointer;
        background-color: rgba(163, 40, 214, 0.8);
    }

    button:active{
        transform: translateY(3px);
    }

    form{
        width: 90vw;
        display: flex;
        flex-direction: column;
    }
`;