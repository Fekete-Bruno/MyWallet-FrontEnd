import styled from "styled-components";

const Value = styled.span`
    color:${props => props.value?`rgba(3, 172, 0, 1)`:'rgba(199, 0, 0, 1)'};
    max-width: 50vw;
    overflow: scroll;
    text-overflow: ellipsis;
`;

export { Value };