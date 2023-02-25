import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify:content: center;
    background-color: #222;
    height: 480px; 
    border-bottom: 2px solid #555;

    @media(max-width: 800px){
        height: auto;
        padding: 20px 35px;
    }

    @media(max-width: 620px){
        padding: 5px 0px;
    }
`
export const Box = styled.div`
    display: flex;    
    gap: 70px;
    align-items: center;
    max-width: 1000px;
    margin: auto;

    @media(max-width:1140px){
        width: 90%;
        gap: 40px; 
    }

    @media(max-width:850px){
        width: 95%;
    }

    @media(max-width: 800px){
        flex-direction: column;        
    }

    @media(max-width: 550px){
        padding-top: 20px;
        margin-bottom: 55px;
    }

`
export const Profile = styled.img`
    height: 380px;
    border-left: 6px solid #0098b3;
    padding-left: 15px;

    @media(max-width:920px) and (min-width: 800px){
        height: 320px;
    }
`
export const textSide = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    width: auto;
`
export const Title = styled.h2`
    font-weight: 400;
    margin-bottom: 10px;
`

export const Text = styled.p`
    line-height: 22px;
    font-size: 17px;

    @media(max-width:1140px) and (min-width: 800px){
        font-size: 15px;
    }

    @media(max-width:550px){
        font-size: 14px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
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