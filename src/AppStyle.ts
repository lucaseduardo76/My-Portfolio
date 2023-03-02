import styled from "styled-components";

type Props = {
    visibility: string
}

export const ButtontoTop = styled.div<Props>`
    padding: 10px;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 15px;
    display: ${(Props) => Props.visibility};
    justify-content: center;
    align-items: center;
    background-color: #0098b3;
    rotate: -90deg;
    border-radius: 50px;
    cursor: pointer;
`

export const ImgtoTop = styled.img`
    height: 30px;
    width: 30px;
`