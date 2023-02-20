import styled from "styled-components";

export const Container = styled.div`
    background-color: rgb(1, 9, 43);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    border-bottom: 0.5px solid #333;
`

export const Logo = styled.div`
    color: rgb(146, 146, 223);
    font-weight: 800;
`

export const List = styled.ul`
    list-style: none;
    display: flex;
`

export const Row = styled.li`
    margin: 30px;

    &::after{
        content:"";
        border-top: 2px solid rgb(45, 103, 179);
        margin-top: 3px;  
        display: block;
        transition: .3s ease;
        transform: scaleX(0);
    }

    &:hover::after{
        border-top: 2px solid rgb(45, 103, 179); 
        margin-top: 3px;  
        transform: scaleX(1);
    }
`

export const Link = styled.a`
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
`