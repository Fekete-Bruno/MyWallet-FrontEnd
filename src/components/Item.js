import styled from "styled-components";
import { Value } from "../styles/Value";

export default function Item({value,date,description}){
    return(
        <Entry>
            <LeftItem><Date>{date}</Date><Description>{description}</Description></LeftItem>
            <Value value={value>=0}>{value<0?'-':''}{value.toFixed(2).toString().replace('-','')}</Value>
        </Entry>
    );

}

const Date = styled.span`
    color:rgba(150, 150, 150, 1);
`;

const Description = styled.span`
    color:rgba(0, 0, 0, 1);
    max-width: 50vw;
    overflow: scroll;
    text-overflow: ellipsis;
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
    width: 95%;
    margin: 1vh 0;
`;