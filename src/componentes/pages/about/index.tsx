import myPhoto from './images/me.png'
import location from '../../../assets/icons/locationIcon.svg'
import whatsapp from '../../../assets/icons/whatsapp.svg'
import download from '../../../assets/icons/downloadIcon.svg'
import { useEffect, useRef } from 'react'
import * as C from './styles'
import ScrollReveal from 'scrollreveal'
import cv from './Lucas Eduardo.pdf'


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
                    Desenvolvedor Backend com mais de um ano de dedicação ao desenvolvimento de software, com muito entusiasmo em me profissionalizar.
                    Durante esse tempo, desenvolvi um conhecimento sólido em várias tecnologias e frameworks, como Java, Spring Boot, JWT para autenticação, JPA e JPQL para mapeamento de dados, e tenho experiência com bancos de dados como MySQL e MongoDB. Além disso, minha base em lógica de programação é ampla, o que me permite resolver problemas de forma eficiente e otimizar processos.
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
