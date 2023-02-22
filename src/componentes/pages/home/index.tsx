import githubIcon from './images/github.svg'
import linkedinIcon from './images/linkedin.svg'
import background from './images/background.webp'
import {Button} from './../../interface/button'
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
                   
                    <Button
                        link={"https://www.linkedin.com/in/lucas-eduardo-silva-071417244/"}
                        photo={linkedinIcon}
                        text={'Linkedin'}
                    />

                    <Button
                        link={"https://github.com/lucaseduardo76"}
                        photo={githubIcon}
                        text={'Github'}
                    />

                </C.ContainerButton>
            </div>

            <div>
                <C.ImgHome src={background} alt="FOTO" />
            </div>
        </C.Container>
    )
}