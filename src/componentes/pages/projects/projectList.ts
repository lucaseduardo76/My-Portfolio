import awax from './images/awax.png'
import urna from './images/urna.png'
import memory from './images/memory.png'
import imc from './images/imc.png'
import delivery from './images/delivery.png'

export const Projects = () =>{
    const list =[
        {
            image: awax,
            title: 'Projeto Awax',
            explaining: 'O projeto Awax é uma landing page criada para aprimorar minhas habilidades em html, css e javascript, proposta pelo curso da B7WEB.',
            Technology:'Html, Css e Javascript',
            deploy: 'https://lucaseduardo76.github.io/projetoawax/',
            git: 'https://github.com/lucaseduardo76/projetoawax'
        },
        {
            image: urna,
            title: 'Urna Eletrônica',
            explaining: 'Aproveitando as eleições de 2022 tive um incentivo para crias um projeto de urna eletronica e praticar minhas habilidades nas tecnolôgias abaixo.',
            Technology:'Html, Css e Javascript',
            deploy: 'https://lucaseduardo76.github.io/Urna-Eletronica/',
            git: 'https://github.com/lucaseduardo76/Urna-Eletronica'
        },
        {
            image: memory,
            title: 'Jogo da Memória',
            explaining: 'Projeto de jogo da memoria construído em React JS, projeto proposto no curso de react da B7WEB.',
            Technology:'React JS, Html, Css e Javascript',
            deploy: 'https://memorygame-lucas.netlify.app/',
            git: 'https://github.com/lucaseduardo76/Memory-Game'
        },
        {
            image: imc,
            title: 'Calculadora de IMC',
            explaining: 'A calculadora de IMC é um projeto que visa desenvolver minhas habilidades em HTML, CSS e JavaScript, proposto pelo curso da B7WEB. Ele permite calcular o índice de massa corporal de uma pessoa.',
            Technology:'React JS, Html, Css e Javascript',
            deploy: 'https://imc-lucas.netlify.app/',
            git: 'https://github.com/lucaseduardo76/Calculadora-IMC'
        },
        {
            image: delivery,
            title: 'Delivery de Pizzas',
            explaining: 'O projeto de delivery de pizza foi proposto pela B7WEB com o objetivo de desenvolver minhas habilidades em HTML, CSS e JavaScript, criando uma plataforma online para pedidos de pizza.',
            Technology:'Html, Css e Javascript',
            deploy: 'https://lucaseduardo76.github.io/Pizza-Delivery/',
            git: 'https://github.com/lucaseduardo76/Pizza-Delivery'
        },

        
    ]

    return list
}