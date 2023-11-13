import styled from "styled-components";

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    row-gap: 10px;
    width: 230px;
    border: 1px solid black;
    padding: 10px 10px;
`

export const Input = styled.input `
    width: 200px;
    border: 1px solid #9a9a9a;
    &:focus{
       border: 1px solid blue;
    }
`

export const Button = styled.button `
    width: 100px;
`
