import { Button } from "../../interface/button"
import web from '../../../assets/icons/webIcon.svg'
import git from '../../../assets/icons/github.svg'
import {Projects} from './projectList'
import './a.css'

type Props = {
    title: string
    img: string
    tecnol: string
    explain: string
    deploy: string
    github: string
}

const BoxProjects = (data: Props) => {
    return (
        <div className="box-projects">
            <a href={data.deploy} target='_blank'>
                <img className="foto-site" src={data.img} alt="" />
            </a>
            <div className="text-projects">
                <h3>{data.title}</h3>

                <p>{data.explain}</p>

                <span>Tecnologias usadas no projeto: {data.tecnol}.</span>
            </div>

            <div className="links">
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
            </div>
        </div>
    )
}

export const ProjectsContainer = () => {


    return (
        <div className="projects">
            <h1>PROJETOS</h1>
            <div className="projects-area">
                {
                    Projects().map((item, key)=>(
                        <BoxProjects
                            key={key}
                            title={item.title}
                            img={item.image}
                            tecnol={item.Technology}
                            explain={item.explaining}
                            deploy={item.deploy}
                            github={item.git}
                        />
                    ))
                }
            </div>
        </div>
    )
}