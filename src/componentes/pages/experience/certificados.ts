import typescript from './image/typescript.jpeg'
import javascript from './image/javascript.jpeg'
import htmlcss from './image/htmlcss.jpeg'
import git from './image/git.jpeg'
import english from './image/english.jpg'

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
        },
        {
            photo: english,
            title: 'Inglês',
            text: 'Conclusão do 4º semestre do curso de inglês da Fisk.',
            link: 'https://sgfapps.fisk.com.br:156/birt/preview?__report=report/aluno/r_aluno_certificado_1A_model.rptdesign&__format=pdf&__locale=en_US&pCdPessoa=525725&pCdEstagio=137' 
        }
        
    ]

    return certificadosItens
}