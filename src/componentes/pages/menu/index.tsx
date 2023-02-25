import { useState } from 'react'
import * as C from './style'
import menu from '../../../assets/icons/menu.svg'

export const Menu = () => {
    const [nav, setNav] = useState('none');

    const ShowNav = () =>{
        if(nav == 'none'){
            setNav('flex')
            console.log('passou aq')
        }else{
            setNav('none')
            console.log('passou aqui 2')
        }
    }


    return (
        <C.Container>
            <C.Logo>
                <span>L.E</span>
            </C.Logo>

            <C.BoxMenuList>
                <C.List Valid={nav}>
                    <C.Row><C.Link href="#home">Home</C.Link ></C.Row>
                    <C.Row><C.Link  href="#about">Sobre</C.Link ></C.Row>
                    <C.Row><C.Link  href="#exp">Experiência</C.Link ></C.Row>
                    <C.Row><C.Link  href="#certificate">Certificado</C.Link ></C.Row>
                    <C.Row><C.Link  href="#project">Projetos</C.Link ></C.Row>
                </C.List>
            </C.BoxMenuList>

            <C.MenuMob onClick={ShowNav}>
                <img src={menu} alt="" />
            </C.MenuMob>

        </C.Container>
    )
}