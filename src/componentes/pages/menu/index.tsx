import { useState, useEffect, useRef } from 'react'
import * as C from './style'
import menu from '../../../assets/icons/menu.svg'

export const Menu = () => {
    const [isNavFlex, setIsNavFlex] = useState('none');
    const minhaSecaoRef = useRef(null);

    

    useEffect(() => {
        if(isNavFlex == 'flex'){
            document.body.style.overflow = 'hidden';
              
        }else{
            document.body.style.overflow = 'auto';
        }
      }, [isNavFlex]);


    return (
        <C.Container id='home'>
            <C.Logo>
                <span>L.E</span>
            </C.Logo>

            <C.BoxMenuList>
                <C.List Valid={isNavFlex}>
                    <C.Row onClick={() => setIsNavFlex(isNavFlex == 'flex' ? 'none' : 'flex')} >
                        <C.Link href="#home">Home</C.Link >
                    </C.Row>
                    <C.Row onClick={() => setIsNavFlex(isNavFlex == 'flex' ? 'none' : 'flex')} ><C.Link  href="#about">Sobre</C.Link ></C.Row>
                    <C.Row onClick={() => setIsNavFlex(isNavFlex == 'flex' ? 'none' : 'flex')} ><C.Link  href="#exp">Experiência</C.Link ></C.Row>
                    <C.Row onClick={() => setIsNavFlex(isNavFlex == 'flex' ? 'none' : 'flex')} ><C.Link  href="#exp">Certificado</C.Link ></C.Row>
                    <C.Row onClick={() => setIsNavFlex(isNavFlex == 'flex' ? 'none' : 'flex')} ><C.Link  href="#projects">Projetos</C.Link ></C.Row>
                </C.List>
            </C.BoxMenuList>

            <C.MenuMob onClick={() => setIsNavFlex(isNavFlex == 'flex' ? 'none' : 'flex')}>
                <img src={menu} alt="" />
            </C.MenuMob>

        </C.Container>
    )
}