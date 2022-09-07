import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { FormWrapper, LogButton } from "../styles/FormWrapper";

export default function Signup(){

    const [disabled,setDisabled] = useState(false);
    const [innerButton,setInnerButton] = useState('Log In');
    const [form,setForm] = useState({});
    
    function sendForm(event){
        event.preventDefault();
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);
        if(form.password !== form.confirm){
            alert("The password confirmation does not match!")
            return resetForm();
        }

        //just for testing:::
        console.log(form);
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

                <input type="text" placeholder="Name" required disabled={disabled} onChange={
                    (e)=>{
                        handleForm({
                            name: e.target.placeholder.toLowerCase(),
                            value: e.target.value,
                        });
                    }
                }/>

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

                <input type="password" placeholder="Confirm Password" required disabled={disabled} onChange={
                (e)=>{
                    handleForm({
                        name: "confirm",
                        value:e.target.value,
                    }
                    );
                }
                }/>

		        <button type="submit" disabled={disabled}>{innerButton}</button>

            </form>
            <Link to="/">
                <LogButton>Already have an account? Log In!</LogButton>
            </Link>
        </FormWrapper>
    );
}