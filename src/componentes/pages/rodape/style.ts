import styled from "styled-components";

export const Container = styled.div`
    background-color: #111;
    height: 50px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Name = styled.a`
    font-weight: 500;
    color:#00D2DF;
    text-decoration: none;
    cursor: pointer;
    width: auto;

    &::after{
        content:"";
        border-top: 2px solid #0098b3;
        margin-top: 3px;  
        display: block;
        transition: .3s ease;
        transform: scaleX(0);
    }

    &:hover::after{
        border-top: 2px solid #0098b3; 
        margin-top: 3px;  
        transform: scaleX(1);
    }
`