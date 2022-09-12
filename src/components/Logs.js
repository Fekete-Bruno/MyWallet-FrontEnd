import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { postLogs } from "../services/axiosHandler";
import { FormWrapper } from "../styles/FormWrapper";

export default function Income({type}){
    let multiplier = 1;
    const navigate = useNavigate();
    const [disabled,setDisabled] = useState(false);
    const [innerButton,setInnerButton] = useState(`Save ${type}`);
    const [form,setForm] = useState({});
    
    if(type==="Expense"){
        multiplier = -1;
    }

    function sendForm(event){
        event.preventDefault();
        setDisabled(true);
        setInnerButton(<ThreeDots color="white"/>);
        postLogs(form).then(()=>{navigate("/main")}).catch((res)=>{resetForm(res)})
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
        setInnerButton(`Save ${type}`);
    }

    function returnToMain(){
        resetForm();
        navigate('/main');
    }

    return(

    <FormWrapper>
        <form onSubmit={sendForm}>

            <h2>New {type}<ion-icon name="return-up-back-outline" onClick={returnToMain}></ion-icon></h2>

            <input type="number" step=".01" min="0" placeholder="Value" required disabled={disabled} onChange={
                (e)=>{
                    handleForm({
                        name: e.target.placeholder.toLowerCase(),
                        value: Number(e.target.value) * multiplier,
                    });
                }
            }/>

            <input type="text" maxLength="40" placeholder="Description" required disabled={disabled} onChange={
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