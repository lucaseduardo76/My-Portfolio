import myPhoto from './images/me.png'
import location from '../../../assets/icons/locationIcon.svg'
import whatsapp from '../../../assets/icons/whatsapp.svg'
import download from '../../../assets/icons/downloadIcon.svg'
import { useEffect, useRef } from 'react'
import * as C from './styles'
import ScrollReveal from 'scrollreveal'
import cv from './cv.pdf'


import { Button } from './../../interface/button'

export const About = () => {
    const secaoRef = useRef(null);

    useEffect(()=>{        
    const scrollReveal = ScrollReveal({ reset: true });
    scrollReveal.reveal('.about-me', { 
        duration: 2000    
    });

    scrollReveal.reveal('.photo', { 
        duration: 2000       
    });

    }, []);

    return (
        <C.Container id='about' ref={secaoRef}>
            <C.Box >
                <div className='photo'>
                    <C.Profile src={myPhoto} alt="" />
                </div>

                <C.textSide className='about-me'>
                    <C.Title>SOBRE MIM</C.Title>

                    <div style={{ display: 'flex', gap: '5px' }}>
                        <img src={location} alt="" />
                        <h4>Eunápolis, Bahia</h4>
                    </div>

                    <C.Text>
                        Há um ano venho me dedicando a essa área do desenvolvimento full-stack e tenho habilidades em tecnologias como PHP, MysSql, JavaScript, React JS, TypeScript, Tailwind e CSS, entre outras.

                        Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no IFBA (Instituto Federal da Bahia) e buscando minha primeira oportunidade profissional nessa área.

                        Meu objetivo é contribuir para o sucesso de empresas e organizações, entregando soluções de qualidade e com alto padrão de excelência.

                        Se você busca um desenvolvedor front-end comprometido e dedicado, vamos bater um papo e ver como posso ajudar!
                    </C.Text>

                    <C.ButtonContainer>
                        <Button
                            link={"https://wa.me/73981405275"}
                            size={'34px'}
                            photo={whatsapp}
                            text={'Whatsapp'}
                        />

                        <Button
                            link={cv}
                            photo={download}
                            text={'Download CV'}
                        />
                    </C.ButtonContainer>
                </C.textSide>
            </C.Box>
        </C.Container>
    )
}
