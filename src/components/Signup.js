import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { postSignup } from "../services/axiosHandler";
import { FormWrapper, LogButton } from "../styles/FormWrapper";

export default function Signup(){

    const [disabled,setDisabled] = useState(false);
    const [innerButton,setInnerButton] = useState('Sign Up');
    const [form,setForm] = useState({});
    const navigate = useNavigate();
    
    function sendForm(event){
        event.preventDefault();
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);
        if(form.password !== form.confirm){
            alert("The password confirmation does not match!")
            return resetForm();
        }
        delete form?.confirm;
        postSignup(form).then(()=>{navigate("/")}).catch((res)=>resetForm(res.reponse));
    }

    function handleForm({name,value}){
        setForm({
            ...form,
            [name]: value,
        });
    }

    function resetForm(resp){
        console.log(resp);
        setDisabled(false);
        setInnerButton('Sign Up');
    }

    return(
        <FormWrapper>
            <h1>My Wallet</h1>
            <form onSubmit={sendForm}>

                <input type="text" placeholder="Name" maxLength="12" required disabled={disabled} onChange={
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