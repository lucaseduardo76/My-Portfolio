import awax from './images/awax.png'
import urna from './images/urna.png'
import memory from './images/memory.png'
import imc from './images/imc.png'
import delivery from './images/delivery.png'
import clock from './images/clock.png'
import pokemon from './images/pokemon.png'
import cdr from './images/cdr.png'
import sisger from './images/sisger.png'

export const Projects = () =>{
    const list =[
        {
            image: sisger,
            title: 'LRI Sisger',
            explaining: 'O sisger é um sistema de gerenciamento de equipes, esse foi o resultado de um projeto integrador do IFBA - Eunápolis',
            Technology:'PHP, HTML, CSS, Javascript e XML',
            deploy: 'https://github.com/lucaseduardo76/LRISisger',
            git: 'https://github.com/lucaseduardo76/LRISisger'
        },
        {
            image: cdr,
            title: 'Formulários CDR',
            explaining: 'Esse foi um trabalho feito para uma clinica da minha cidade, sistema de formulario, com salvamento de pdf automático no servidor',
            Technology:'Node JS, JavaScript',
            deploy: 'https://github.com/lucaseduardo76/cdr-tools',
            git: 'https://github.com/lucaseduardo76/cdr-tools'
        },
        {
            image: awax,
            title: 'Projeto Awax',
            explaining: 'O projeto Awaw é uma landing page totalente responsiva e interativa ótimo exemplo de site para seu negócio.',
            Technology:'Html, Css e Javascript',
            deploy: 'https://lucaseduardo76.github.io/projetoawax/',
            git: 'https://github.com/lucaseduardo76/projetoawax'
        },
        {
            image: pokemon,
            title: 'Pokedéx',
            explaining: 'Uma pokedex responsiva e interativa, consumindo a API da pokeAPI',
            Technology:'React JS, Axios, Styled-components, Html, Css e Javascript',
            deploy: 'https://pokemondex-reactt.netlify.app/',
            git: 'https://github.com/lucaseduardo76/Pokedex'
        },
        {
            image: urna,
            title: 'Urna Eletrônica',
            explaining: 'Aproveitando as eleições de 2022 veio a ideia de fazer uma urna eletronica.',
            Technology:'Html, Css e Javascript',
            deploy: 'https://lucaseduardo76.github.io/Urna-Eletronica/',
            git: 'https://github.com/lucaseduardo76/Urna-Eletronica'
        },
        {
            image: memory,
            title: 'Jogo da Memória',
            explaining: 'Jogo clássico da memória, com timer e botão de reset, ótimo para passar o tempo!',
            Technology:'React JS, Html, Css e Javascript',
            deploy: 'https://memorygame-lucas.netlify.app/',
            git: 'https://github.com/lucaseduardo76/Memory-Game'
        },
        {
            image: imc,
            title: 'Calculadora de IMC',
            explaining: 'Calculadora de IMC que ajuda a calcular o índice de massa corporal de uma pessoa.',
            Technology:'React JS, Html, Css e Javascript',
            deploy: 'https://imc-lucas.netlify.app/',
            git: 'https://github.com/lucaseduardo76/Calculadora-IMC'
        },
        {
            image: delivery,
            title: 'Delivery de Pizzas',
            explaining: 'Um projeto pessoal de delivery de pizza com interface totalmente responsiva e de fácil interatividade.',
            Technology:'Html, Css e Javascript',
            deploy: 'https://lucaseduardo76.github.io/Pizza-Delivery/',
            git: 'https://github.com/lucaseduardo76/Pizza-Delivery'
        },
        {
            image: clock,
            title: 'Relógio analógico',
            explaining: 'Um relógio analógico que pega a data e hora local da maquina com Javascript.',
            Technology:'Html, Css e Javascript',
            deploy: 'https://lucaseduardo76.github.io/Relogio/',
            git: 'https://github.com/lucaseduardo76/Relogio'
        }
        

        
    ]

    return list
}
