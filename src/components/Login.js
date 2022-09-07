import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { FormWrapper, LogButton } from "../styles/FormWrapper";

export default function Login(){
    const navigate = useNavigate();
    const [disabled,setDisabled] = useState(false);
    const [innerButton,setInnerButton] = useState('Log In');
    const [form,setForm] = useState({});

    function sendForm(event){
        event.preventDefault();
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);

        //just for testing:::
        console.log(form);
        setTimeout(()=>{resetForm();navigate("/main")},5000)
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
                            value: e.target.value.toLowerCase(),
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
            <Link to="/sign-up">
                <LogButton>New to My Wallet? Sign Up!</LogButton>
            </Link>
        </FormWrapper>
    );
}