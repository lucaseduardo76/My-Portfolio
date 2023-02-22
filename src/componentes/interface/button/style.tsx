import styled from "styled-components";

export const Button = styled.button`
    background-color: #333;
    border: 2px solid #0575ae;   
    width: 130px;
    height: 50px;
    border-radius: 10px;
    box-shadow: #0098b3 .5px .5px 4px;
    transition: all .8s;
    cursor: pointer;

    &:hover{
        box-shadow: #6ee0f4 .5px .5px 4px;
        border: 2px solid #6ee0f4;
        background-color: #57a1ad42;
    }
`

export const ButtonLink = styled.a`
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

export const ButtonText = styled.span`
    color: #eee;
`