import typescript from './image/typescript.jpeg'
import javascript from './image/javascript.jpeg'
import htmlcss from './image/htmlcss.jpeg'
import git from './image/git.jpeg'

export const CertificationList = () => {

    type Props = {
        photo:string,
        title: string,
        text: string
        link: string
    }

    const certificadosItens: Props[] = [
        {
            photo: htmlcss,
            title: 'Html & Css',
            text: 'HTML é a linguagem de marcação usada para estruturar o conteúdo de uma página web, enquanto CSS é usada para estilizá-lo.',
            link: 'https://alunos.b7web.com.br/media/certificates/certificado_8687673.jpg'   
        },

        {
            photo: javascript,
            title: 'Javascript',
            text: 'JavaScript é uma linguagem de programação usada para criar interatividade e dinamismo em páginas web.',
            link: 'https://alunos.b7web.com.br/media/certificates/certificado_2365498.jpg'   
        },        
        {
            photo: typescript,
            title: 'Typescript',
            text: 'TypeScript é uma linguagem de programação de código aberto que estende o JavaScript adicionando tipos estáticos.',
            link: 'https://alunos.b7web.com.br/media/certificates/certificado_8241739.jpg' 
        },        
        {
            photo: git,
            title: 'Git & Github',
            text: 'Git é um sistema de controle de versão e o GitHub é uma plataforma de hospedagem de código fonte.',
            link: 'https://alunos.b7web.com.br/media/certificates/certificado_4381621.jpg' 
        }
        
    ]

    return certificadosItens
}