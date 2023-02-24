import typescript from './image/typescript.jpg'
import javascript from './image/javascript.jpg'
import htmlcss from './image/htmlcss.jpg'
import git from './image/git.jpg'

export const CertificationList = () => {

    type Props = {
        photo:string,
        title: string,
        text: string
    }

    const certificadosItens: Props[] = [
        {
            photo: htmlcss,
            title: 'Html & Css',
            text: 'HTML é a linguagem de marcação usada para estruturar o conteúdo de uma página web, enquanto CSS é usada para estilizá-lo.'    
        },

        {
            photo: javascript,
            title: 'Javascript',
            text: 'JavaScript é uma linguagem de programação usada para criar interatividade e dinamismo em páginas web.'    
        },        
        {
            photo: typescript,
            title: 'Typescript',
            text: 'TypeScript é uma linguagem de programação de código aberto que estende o JavaScript adicionando tipos estáticos.'
        },        
        {
            photo: git,
            title: 'Git & Github',
            text: 'Git é um sistema de controle de versão e o GitHub é uma plataforma de hospedagem de código fonte.'
        }
        
    ]

    return certificadosItens
}