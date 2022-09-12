import styled from "styled-components";
import { Value } from "../styles/Value";
import Item from "./Item";

export default function Box({logs,finalValue}){

    const emptyText = "There are no income or expense logs yet...";

    return(
        <>
        {
            logs.length===0?

            <EmptyBox><div>{emptyText}</div></EmptyBox>:

            <MainBox>
                <ListContainer>
                    {logs.map((item,index)=>{
                        return (<Item value={item.value} date={item.date} description={item.description} key={index}/>);
                    })}
                </ListContainer>
                
                <TotalBox>TOTAL<Value value={finalValue>=0}>{finalValue<0?'-':''}{finalValue.toFixed(2).toString().replace('-','')}</Value></TotalBox>
            </MainBox>
        }
        </>
    );
}

const BoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius:6px
`;

const MainBox = styled(BoxDiv)`
    overflow: scroll;
    align-items: center;
    background-color:rgba(255,255,255,1);
    position: relative;
`;

const EmptyBox = styled(BoxDiv)`

    align-items: center;
    justify-content: center;
    color: rgba(134, 134, 134, 1);
    font-size: 2vh;
    div{
        width: 50%;
        text-align: center;
    }
`;

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
    width: 95%;
    color:rgba(0, 0, 0, 1);
    font-size: 2.5vh;
    font-weight:700;
    span{
        font-weight: 400;
    }
`;