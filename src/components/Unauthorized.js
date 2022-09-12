import { useNavigate } from "react-router-dom";
import { FormWrapper } from "../styles/FormWrapper";

export default function Unauthorized(){
    const navigate = useNavigate();
    return(
        <FormWrapper>
            <h1>MyWallet</h1>
            <h2>No credentials!</h2>
            <button onClick={()=>{navigate('/')}}>Return to Login</button>
        </FormWrapper>
    );
}