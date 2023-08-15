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
    padding-bottom: 60px;
    padding-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #222;    
    border-bottom: 2px solid #555;

    @media(max-width: 830px){
        padding-bottom: 15px;
    }
`

export const Title = styled.h2`
    color: #fff;
    font-weight: 500;
    letter-spacing: 4px;
`

export const ProjectArea = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 40px;
    column-gap: 10%;
    margin-top: 80px;

    @media(max-width: 1100px) and (min-width: 880px){
        width: 90%;
    }

    @media(max-width: 880px) and (min-width: 830px){
        width: 95%;
    }

    @media(max-width: 830px){
        grid-template-columns: auto;

    }

    @media(max-width: 670px){
        width: 95%;
    }
`

type Props = {
    index: number
    showall: boolean
}

export const BoxProject = styled.div<Props>`
    height: 600px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    padding: 5px;
   

    @media(max-width: 830px){
        ${(Props) => Props.index >= 4 ? Props.showall ?  ` display:${Props.index >= 4 && "flex"}; `: `display: ${Props.index >= 4 && "none"};` : ""}
    }
`

export const ProjectImgs = styled.img`
    height: 320px;
    width: 100%;
    padding-left: 5px;
    border-left: 5px solid #0098b3;
    cursor: pointer;
    transition: .8s all;
    border-radius: 25px 25px 0px 0px;

    &:hover{
        box-shadow:  #0098b3 6px 6px 10px, #fff -6px -6px 10px;
    }
`
export const Links = styled.div`
    display: flex;
    gap: 35px;
`

export const TextProject = styled.div`
    height: 120px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    @media(max-width: 1265px){
        height: 150px;
    }
   `

export const Paragraph = styled.p`
    margin-left: 15px;
`

export const Technologies = styled.span`
    margin-left: 15px;
    color: #0098b3;
`

export const More = styled.div`
    margin: auto;
    padding: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    color: #fff;   
    cursor: pointer;

    @media(min-width: 830px){
        display: none;
    }
`

type TopButtonProps = {
    SeeAllLess: boolean
}

export const ArrowSvg = styled.img<TopButtonProps>`
    transform: rotate(${(TopButtonProps) => TopButtonProps.SeeAllLess ? '-90' : '90'}deg);
    animation: ${pulse} 3s linear infinite;
    transition: 1.2s ease;
   
`

export const Tecs = styled.span`
    color: #0098b3;
`
