import myPhoto from './images/me.png'
import location from './images/locationIcon.svg'
import email from './images/emailIcon.svg'
import download from './images/downloadIcon.svg'
import "./a.css"
import * as C from './styles'

export const About = () => {
    return (
        <C.Container>
            <C.Box>
                <div>
                    <C.Profile src={myPhoto} alt="" />
                </div>

                <C.textSide>
                    <h2 style={{fontWeight: '400'}}>SOBRE MIM</h2>

                    <div style={{display: 'flex', gap: '5px'}}>
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
                        <C.Button>
                            <C.ButtonLink href="">
                                <img src={download} alt="" />
                                <C.ButtonText>Currículo</C.ButtonText>
                            </C.ButtonLink>                            
                        </C.Button>

                        <C.Button>
                            <C.ButtonLink href="">
                                <img src={email} alt="" />
                                <C.ButtonText>E-mail</C.ButtonText>
                            </C.ButtonLink>                            
                        </C.Button>
                    </C.ButtonContainer>
                </C.textSide>
            </C.Box>
        </C.Container>
    )
}