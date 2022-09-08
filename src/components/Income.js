import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { FormWrapper } from "../styles/FormWrapper";

export default function Income(){

    const navigate = useNavigate();
    const [disabled,setDisabled] = useState(false);
    const [innerButton,setInnerButton] = useState('Save Income');
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
        <form onSubmit={sendForm}>

            <h2>New Income</h2>

            <input type="number" min="0" placeholder="Value" required disabled={disabled} onChange={
                (e)=>{
                    handleForm({
                        name: e.target.placeholder.toLowerCase(),
                        value: Number(e.target.value),
                    });
                }
            }/>

            <input type="text" placeholder="Description" required disabled={disabled} onChange={
            (e)=>{
                handleForm({
                    name:e.target.placeholder.toLowerCase(),
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