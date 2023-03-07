import styled from "styled-components";
import { keyframes } from "styled-components";

const pulse = keyframes`
0% {
    opacity: 1;
  }
  40% {
    opacity: 0.2;
  }
  60% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`

export const Container = styled.div`
    height: auto;
    background-color: #333;
    padding: 60px 0px;
    border-bottom: 2px solid #555;
`

export const SecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;    
    width: 70%;
    margin: auto;  
    
    @media(max-width: 1540px){
        width: 85%;
    }
    @media(max-width: 860px){
        width: 90%;
    }
`

export const Title = styled.h2`
    font-weight: 500;
    color: #fff;
`

export const ExpBoxText = styled.div`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px;
`

export const ExpText = styled.h2`
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
    color: #fff;
`
export const ContainerCertic = styled.div`
    margin-bottom: 20px;
    margin-left: 15px;
    display: flex;
    justify-content: space-between;    
    flex-wrap: wrap;

    @media(max-width:725px){
        justify-content: center;
    }    
`

type Props = {
    img:string,
    index: number
    showall: boolean
}

export const CertificateBox = styled.div<Props>`
    display: flex;
    align-items: flex-end;      
    max-width: 350px; 
    height: 230px;
    background: url(${Props => Props.img});
    background-size: cover;
    background-position: center;    
    border: 5px solid #0098b3;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    box-shadow:  #0098b3 2px 2px 10px, #fff -2px -2px 10px;
    margin-top: 40px;
    transition: .5s all;

    &:hover{
        box-shadow:  #0098b3 6px 6px 10px, #fff -6px -6px 10px;
    }

    @media(max-width: 860px) and (min-width: 725px){
        width: 300px;
    }


    @media(max-width: 725px){

        ${(Props) => Props.index >= 3 ? Props.showall ?  ` display:${Props.index >= 3 && "flex"};`: `display: ${Props.index >= 3 && "none"};` : ""}
    
    }
`
export const BlackScreen = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    height: 50%;
    padding: 8px;
    border-radius: 15px 15px  0px  0px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: #fff;
`
export const BlackScreenTitle = styled.h3`
    font-size: 23px;
    font-weight: 400;
    color: #fff
`

export const BlackScreenText = styled.p`
    font-size: 14px;
    line-height: 20px;
`
export const More = styled.div`
    margin: auto;
    padding: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    color: #fff;    

    @media(min-width: 725px){
        display: none;
    }
`
type TopButtonProps = {
    SeeAllLess: boolean
}

export const ArrowSvg = styled.img<TopButtonProps>`
    transform: rotate(${(TopButtonProps) => TopButtonProps.SeeAllLess ? '-90' : '90'}deg);
    fill: #fff;
    animation: ${pulse} 3s linear infinite;
    transition: 1.2s ease;
   
`

export const FinalTextCertificate = styled.div`
    font-size: 17px;
    color: #fff;
`