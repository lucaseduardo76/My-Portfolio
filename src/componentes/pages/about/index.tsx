import myPhoto from './images/me.png'
import location from '../../../assets/icons/locationIcon.svg'
import whatsapp from '../../../assets/icons/whatsapp.svg'
import download from '../../../assets/icons/downloadIcon.svg'
import { useRef } from 'react'
import * as C from './styles'

import { Button } from './../../interface/button'

export const About = () => {
    const secaoRef = useRef(null);

    return (
        <C.Container id='about' ref={secaoRef}>
            <C.Box>
                <div>
                    <C.Profile src={myPhoto} alt="" />
                </div>

                <C.textSide>
                    <C.Title>SOBRE MIM</C.Title>

                    <div style={{ display: 'flex', gap: '5px' }}>
                        <img src={location} alt="" />
                        <h4>Eunápolis, Bahia</h4>
                    </div>

                    <C.Text>
                        Há um ano venho me dedicando ao desenvolvimento front-end e tenho habilidades em tecnologias como JavaScript, React JS, TypeScript, Tailwind e CSS, entre outras.

                        Atualmente, estou cursando Análise e Desenvolvimento de Software e buscando minha primeira oportunidade profissional nessa área.

                        Meu objetivo é contribuir para o sucesso de empresas e organizações, entregando soluções de qualidade e com alto padrão de excelência.

                        Se você busca um desenvolvedor front-end comprometido e dedicado, vamos bater um papo e ver como posso ajudar!
                    </C.Text>

                    <C.ButtonContainer>
                        <Button
                            link={""}
                            photo={download}
                            text={'Download CV'}
                        />

                        <Button
                            link={""}
                            photo={whatsapp}
                            text={'Whatsapp'}
                        />
                    </C.ButtonContainer>
                </C.textSide>
            </C.Box>
        </C.Container>
    )
}