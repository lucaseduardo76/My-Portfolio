import styled from "styled-components"
import * as C from './style'

export const Menu = () => {
    return (
        <C.Container>
            <C.Logo>
                <span>L.E</span>
            </C.Logo>

            <div className="list">
                <C.List>
                    <C.Row><C.Link href="#home">Home</C.Link ></C.Row>
                    <C.Row><C.Link  href="#about">Sobre</C.Link ></C.Row>
                    <C.Row><C.Link  href="#exp">Experiência</C.Link ></C.Row>
                    <C.Row><C.Link  href="#project">Porjetos</C.Link ></C.Row>
                </C.List>
            </div>
        </C.Container>
    )
}