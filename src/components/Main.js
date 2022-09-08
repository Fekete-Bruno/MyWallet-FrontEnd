import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Main(){
    const empty = false;
    const emptyText = "There are no income or expense logs yet..."
    const navigate = useNavigate();
    const list = [
        { value: -123.3, description: "Almoco", date:"11/30" },
        { value: 100.50, description: "Salario", date:"11/27"},

        { value: -1233, description: "Churrasco", date:"11/26"},
        { value: 100.59, description: "Salario", date:"11/20"},

        { value: -1233, description: "Mercado", date:"11/19"},
        { value: 1000, description: "Salario", date:"11/19"},

        { value: -1233, description: "Papinha", date:"11/18"},
        { value: 1000, description: "Salario", date:"11/15"},


        { value: -123.3, description: "Almoco", date:"11/30" },
        { value: 100.50, description: "Salario", date:"11/27"},

        { value: 100.59, description: "Salario", date:"11/20"},

        { value: 1000, description: "Salario", date:"11/19"},

        { value: -1000, description: "Salario", date:"11/15"},


    ]


    let finalValue = 0;
    list.map((item)=>{
        finalValue+=item.value;
    })


    function returnToMain(){
        console.log('bolinha');
    }
    return(
        <MainWrapper>
            
            <MainTitle>
                <div>Hello, Fulano</div>
                <div onClick={returnToMain}><ion-icon name="exit-outline"></ion-icon></div>
            </MainTitle>

            {
                empty?

                <EmptyBox><div>{emptyText}</div></EmptyBox>:

                <MainBox>
                    <ListContainer>
                        {list.map((item,index)=>{
                            return (<Item value={item.value} date={item.date} description={item.description} key={index}/>);
                        })}
                    </ListContainer>
                    
                    <TotalBox>TOTAL<Value value={finalValue>=0}>{finalValue.toFixed(2).toString().replace('-','')}</Value></TotalBox>
                </MainBox>
            }

            <ButtonWrapper>
                <NewButton onClick={()=>navigate("/income")}><div><ion-icon name="add-circle-outline"></ion-icon></div><div>New Income</div></NewButton>
                <NewButton onClick={()=>navigate("/expense")}><div><ion-icon name="remove-circle-outline"></ion-icon></div><div>New Expense</div></NewButton>
            </ButtonWrapper>
        </MainWrapper>
    );
}

function Item({value,date,description}){
    console.log(value);
    return(
        <Entry>
            <LeftItem><Date>{date}</Date><Description>{description}</Description></LeftItem>
            <Value value={value>=0}>{value.toFixed(2).toString().replace('-','')}</Value>
        </Entry>
    );

}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const TotalBox = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 1vh 0;
    width: 90%;
    color:rgba(0, 0, 0, 1);
    font-size: 2.5vh;
    font-weight:700;
    span{
        font-weight: 400;
    }
`;

const Value = styled.span`
    color:${props => props.value?`rgba(3, 172, 0, 1)`:'rgba(199, 0, 0, 1)'};
`;

const Date = styled.span`
    color:rgba(150, 150, 150, 1);
`;

const Description = styled.span`
    color:rgba(0, 0, 0, 1);
`;

const LeftItem = styled.div`
    display: flex;
    span{
        margin: 0 1vw;
    }
`;
const Entry = styled.div`
    display:flex;
    justify-content: space-between;
    font-size: 2.5vh;
    width: 90%;
    margin: 1vh 0;
`;

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

const Box = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius:6px
`;

const MainBox = styled(Box)`
    padding: 1vh 0;
    overflow: scroll;
    align-items: center;
    background-color:rgba(255,255,255,1);
    position: relative;
`;

const EmptyBox = styled(Box)`

    align-items: center;
    justify-content: center;
    color: rgba(134, 134, 134, 1);
    font-size: 2vh;
    div{
        width: 50%;
        text-align: center;
    }
`;

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