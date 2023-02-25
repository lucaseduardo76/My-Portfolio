import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    padding-bottom: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #222;
    padding-top: 40px;
    border-bottom: 2px solid #555;
    overflow: hidden;
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
`

export const BoxProject = styled.div`
    height: 600px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    padding: 5px;
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
    min-height: 120px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
`

export const Paragraph = styled.p`
    margin-left: 15px;
`

export const Technologies = styled.span`
    margin-left: 15px;
    color: #0098b3;
`