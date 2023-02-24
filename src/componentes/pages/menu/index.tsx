import styled from "styled-components"
import * as C from './style'
import menu from '../../../assets/icons/menu.svg'

export const Menu = () => {
    return (
        <C.Container>
            <C.Logo>
                <span>L.E</span>
            </C.Logo>

            <C.BoxMenuList>
                <C.List>
                    <C.Row><C.Link href="#home">Home</C.Link ></C.Row>
                    <C.Row><C.Link  href="#about">Sobre</C.Link ></C.Row>
                    <C.Row><C.Link  href="#exp">Experiência</C.Link ></C.Row>
                    <C.Row><C.Link  href="#certificate">Certificado</C.Link ></C.Row>
                    <C.Row><C.Link  href="#project">Projetos</C.Link ></C.Row>
                </C.List>
            </C.BoxMenuList>

            <C.MenuMob>
                <img src={menu} alt="" />
            </C.MenuMob>

        </C.Container>
    )
}