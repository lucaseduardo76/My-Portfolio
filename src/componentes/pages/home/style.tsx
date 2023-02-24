import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";

const pulse = keyframes`
0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`
export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #333;
    height: calc(100vh - 100px);
    border-bottom: 2px solid #555;
`

export const ImgHome = styled.img`
    height: 440px;
    width: 440px;
    border-radius: 150px;
    border: #0098b3 6px solid;
    box-sizing: content-box;
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); 
    will-change: transform;

    @media(max-width: 1000px){
      height: 380px;
      width: 380px;
    }
`

export const Text = styled.h2`
    font-size: 25px;
    font-weight: 500;
    color: #eee;

    @media(max-width:1000px) and (min-width: 880px){
      font-size: 23px;
    }
    @media(max-width: 400px){
      font-size: 21px
    }

`

export const Name = styled.h2`
    font-size: 50px;
    font-weight: 600;
    color: #0098b3;

    &::after{
        content: "";
        margin-left: 5px;
        border-right: 5px solid #ffffff;
        animation: ${pulse} .6s alternate infinite;
    }

    @media(max-width:1000px){
      font-size: 45px;
    }

    @media(max-width: 880px){
      font-size: 65px
    }

    @media(max-width: 600px){
      font-size: 45px
    }

    @media(max-width: 400px){
      font-size: 40px
    }
`
export const BoxImg = styled.div`
    @media(max-width: 880px){
      display: none;
    }
`

export const leftSide = styled.div`
    line-height: 66px;
`

export const ContainerButton = styled.div`
    display: flex;
    margin-top: 35px;
    gap: 35px;
`
