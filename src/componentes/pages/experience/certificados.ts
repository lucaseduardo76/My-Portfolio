import typescript from './image/typescript.jpg'
import javascript from './image/javascript.jpg'
import htmlcss from './image/htmlcss.jpg'

export const CertificationList = () => {

    type Props = {
        photo:string,
        title: string,
        text: string
    }

    const certificadosItens: Props[] = [
        {
            photo: typescript,
            title: 'Typescript',
            text: 'TypeScript é uma linguagem de programação de código aberto que estende o JavaScript adicionando tipos estáticos.'
        },
        {
            photo: javascript,
            title: 'Javascript',
            text: 'JavaScript é uma linguagem de programação usada para criar interatividade e dinamismo em páginas web.'    
        },
        {
            photo: htmlcss,
            title: 'Html & Css',
            text: 'HTML é a linguagem de marcação usada para estruturar o conteúdo de uma página web, enquanto CSS é usada para estilizá-lo.'    
        }
    ]

    return certificadosItens
}