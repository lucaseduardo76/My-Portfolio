import styled from "styled-components";


export const Container = styled.div`
    background-color: #222;
    height: 480px;
    padding-top: 45px;
`
export const Box = styled.div`
    display: flex;
    gap: 70px;
    align-items: center;
    max-width: 1000px;
    margin: auto;
`
export const Profile = styled.img`
    height: 380px;
    border-left: 6px solid #0098b3;
    padding-left: 15px;
`
export const textSide = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
`
export const Text = styled.p`
    line-height: 22px;
    font-size: 17px;
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 35px;
`

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