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
        console.log(event);
        console.log(form);

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

    form{
        display: flex;
        flex-direction: column;
    }
`;