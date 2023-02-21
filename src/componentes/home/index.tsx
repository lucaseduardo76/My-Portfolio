import githubIcon from './images/github.svg'
import linkedinIcon from './images/linkedin.svg'
import background from './images/background.webp'
import * as C from './style'


export const Home = () => {
    return (
        <C.Container >
            <div>
                <C.leftSide>
                    <C.Text>OLÁ, EU SOU</C.Text>
                    <C.Name>LUCAS EDUARDO</C.Name>
                    <C.Text>DESENVOLVEDOR FRONT-END</C.Text>
                </C.leftSide>

                <C.ContainerButton>
                    <C.Button>
                        <C.ButtonLink href="https://www.linkedin.com/in/lucas-eduardo-silva-071417244/" target="_blank">
                            <img style={{marginTop: '-7px'}} className='linkedin-icon' src={linkedinIcon} alt="" />
                            <C.ButtonText>Linkedin</C.ButtonText>
                        </C.ButtonLink>
                    </C.Button>

                    <C.Button>
                        <C.ButtonLink href="https://github.com/lucaseduardo76" target="_blank">
                            <img src={githubIcon} alt="" />
                            <C.ButtonText>Github</C.ButtonText>
                        </C.ButtonLink>
                    </C.Button>
                </C.ContainerButton>
            </div>

            <div>
                <C.ImgHome src={background} alt="FOTO" />
            </div>
        </C.Container>
    )
}