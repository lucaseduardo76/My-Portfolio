import githubIcon from '../../../assets/icons/github.svg'
import linkedinIcon from '../../../assets/icons/linkedin.svg'
import background from './images/background.webp'
import { Button } from './../../interface/button'
import * as C from './style'
import { useEffect, useState } from 'react'


export const Home = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const boxName = 'Lucas Eduardo'
    
     
    useEffect(() => {
        let timer;
        if(count <= 12){
            timer = setInterval(() => {
                setName(name + boxName.charAt(count))
                console.log(count)
                if (count < boxName.length) {
                    setCount(count + 1)
                }
            }, 150)
        }
        return () => clearInterval(timer);
    }, [count])


    return (
        <C.Container >
            <div>
                <C.leftSide>
                    <C.Text>OLÁ, EU SOU</C.Text>
                    <C.Name>{name}</C.Name>
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

            <C.BoxImg>
                <C.ImgHome src={background} alt="FOTO" />
            </C.BoxImg>
        </C.Container>
    )
}
