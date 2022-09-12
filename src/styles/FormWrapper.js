import styled from "styled-components";

const LogButton = styled.div`
color: rgba(255, 255, 255, 1);
text-decoration: none;
margin-top: 4vh;
font-size: 2.5vh;
font-weight: 700;
`;

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

h1{
    margin-bottom: 3vh;
    color: white;
    font-size: 5vh;
    font-family: 'Saira Stencil One', cursive;
}

h2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1vh;
    color: white;
    font-size: 5vh;
}

input{
    border:none;
    border-radius: 5px;
    height: 10vh;
    margin:1vh 0;
    padding: 2vh;
    font-size: 3vh;
    color: black;
}

input::placeholder{
    color: black;
    opacity: 1;
}

button{
    padding:1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(163, 40, 214, 1);
    border-radius: 5px;
    border: none;
    color: white;
    height: 7vh;
    font-weight: 700;
    font-size: 3vh;
    margin: 1vh 0;
}

button:hover{
    cursor: pointer;
    background-color: rgba(163, 40, 214, 0.8);
}

button:active{
    transform: translateY(3px);
}

form{
    width: 90vw;
    display: flex;
    flex-direction: column;
}
`;

export { FormWrapper , LogButton};