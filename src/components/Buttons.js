import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Buttons(){
    const navigate = useNavigate();
    return(
        <ButtonWrapper>
            <NewButton onClick={()=>navigate("/income")}><div><ion-icon name="add-circle-outline"></ion-icon></div><div>New Income</div></NewButton>
            <NewButton onClick={()=>navigate("/expense")}><div><ion-icon name="remove-circle-outline"></ion-icon></div><div>New Expense</div></NewButton>
        </ButtonWrapper>
    );
}


const ButtonWrapper = styled.div`
    margin: 2vh 0;
    display: flex;
    justify-content: space-between;
    height: 20vh;
`;

const NewButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:10px;
    width: 45%;
    background-color:rgba(163, 40, 214, 1);
    color:white;
    font-weight: 700;
    font-size: 2.5vh;
    ion-icon{
        font-size: 4vh;
    }
    div{
        width: 50%;
    }

    &:hover{
        cursor: pointer;
        background-color: rgba(163, 40, 214, 0.5);
    }

    &:active{
        transform: translateY(3px);
    }
`;