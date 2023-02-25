import styled from "styled-components";
/*background-color: rgb(1, 9, 43);*/
export const Container = styled.div`
    background-color: #111;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 85px;
    border-bottom: 2px solid #444;
`

export const Logo = styled.div`
    color: rgb(146, 146, 223);
    font-weight: 800;
    
`
type Props = {
    Valid: string
}

export const List = styled.ul<Props>`
    list-style: none;
    display: flex;
    
    @media(max-width: 820px){        
        display: ${({ Valid }) => Valid};
        flex-direction: column;
        position: absolute;
        margin-top: 44px;
        width: 300px;
        height: calc(100vh - 104px);
        align-items: flex-end;
        padding: 10px 30px;
        font-size: 30px;
        background-color: #222;
        z-index: 99;  
        overflow: hidden;  
        right: 0;
    }
`
export const BoxMenuList = styled.div`    
    
`
export const Row = styled.li`
    margin: 30px;

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

    @media(max-width: 1030px){
        margin: 20px;
    }

    
`

export const Link = styled.a`
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
`

export const MenuMob = styled.div`
    display: none;
    height: 40px;
    width: 40px;
    cursor: pointer;
    @media(max-width: 820px){
        display: block;
    }
`