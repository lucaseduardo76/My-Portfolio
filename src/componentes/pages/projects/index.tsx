import { Button } from "../../interface/button"
import web from '../../../assets/icons/webIcon.svg'
import git from '../../../assets/icons/github.svg'
import arrow from './../../../assets/icons/arrow.svg'
import { Projects } from './projectList'
import * as C from './style'
import { useState, useEffect } from "react"
import ScrollReveal from 'scrollreveal'

type Props = {
    title: string
    img: string
    tecnol: string
    explain: string
    deploy: string
    github: string
    index: number
    hiddenProjects: boolean
}

const BoxProjects = (data: Props) => {

   
    useEffect(()=>{        
        const scrollReveal = ScrollReveal({ reset: true });
      
        scrollReveal.reveal('#Box-Projects', { 
            duration: 2000    
        });
    }, []);
        
        const id = data.index < 4 ? 'Box-Projects' : 'none';
    return (
        <C.BoxProject id={id} index={data.index} showall={data.hiddenProjects} >
            <a href={data.deploy} target='_blank'>
                <C.ProjectImgs src={data.img} alt="" />
            </a>
            <C.TextProject>
                <h3>{data.title}</h3>

                <C.Paragraph>{data.explain}</C.Paragraph>

                <span>Tecnologias usadas no projeto: <C.Tecs>{data.tecnol}</C.Tecs>.</span>
            </C.TextProject>

            <C.Links>
                <Button
                    link={data.deploy}
                    photo={web}
                    text={'Deploy'}
                />

                <Button
                    link={data.github}
                    photo={git}
                    text={'Repositório'}
                />
            </C.Links>
        </C.BoxProject>
    )
}

export const ProjectsContainer = () => {

    const [showProjects, setShowProjects] = useState<boolean>(false)

    const handleClickSetShowing = () => {
        setShowProjects(showProjects ? false : true)
    }

   
   

    return (
        <C.Container id="projects">
            <C.Title>PROJETOS</C.Title>
            <C.ProjectArea >
                {
                    Projects().map((item, key) => (
                        <BoxProjects
                            key={key}
                            index={key}
                            title={item.title}
                            img={item.image}
                            tecnol={item.Technology}
                            explain={item.explaining}
                            deploy={item.deploy}
                            github={item.git}
                            hiddenProjects={showProjects}
                        />
                    ))
                }
            </C.ProjectArea>

            <C.More onClick={handleClickSetShowing}>
                {showProjects && "Ver menos"}
                {!showProjects && "Ver tudo"}
                <C.ArrowSvg SeeAllLess={showProjects} src={arrow} alt="" />
            </C.More>

        </C.Container>
    )
}
