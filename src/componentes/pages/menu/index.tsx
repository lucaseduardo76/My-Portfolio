import { useState, useEffect, useRef } from 'react'
import * as C from './style'
import menu from '../../../assets/icons/menu.svg'

type Props = {
    link: string
    section: string
}

const menuList: Props[] = [
    {
        link: '#home',
        section: 'Home'
    },

    {
        link: '#about',
        section: 'About'
    },

    {
        link: '#exp',
        section: 'Experiência'
    },

    {
        link: '#exp',
        section: 'Certificado'
    },

    {
        link: '#projects',
        section: 'Projetos'
    }
]


export const Menu = () => {
    const [isNavFlex, setIsNavFlex] = useState('none');
    const minhaSecaoRef = useRef(null);



    useEffect(() => {

        if (window.screen.width < 820) {

            if (isNavFlex == 'flex') {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            
        }

    }, [isNavFlex]);

    const handleMenuCLick = (e: React.MouseEvent): void =>{
        setIsNavFlex(isNavFlex == 'flex' ? 'none' : 'flex')

        e.preventDefault()
        
        const id: any = e.currentTarget.getAttribute("href");
        const screenTO = document.querySelector(id);

        window.scrollTo({
            behavior: 'smooth',
            top: screenTO.offsetTop
        })
    }


    return (
        <C.Container id='home'>
            <C.Logo>
                <span>L.E</span>
            </C.Logo>

            <C.BoxMenuList>
                <C.List Valid={isNavFlex}>

                    {
                        menuList.map((item, key) => (
                            <C.Row key={key}>
                                <C.Link href={item.link} onClick={handleMenuCLick}>{item.section}</C.Link >
                            </C.Row>
                        ))
                    }

                </C.List>
            </C.BoxMenuList>

            <C.MenuMob onClick={() => setIsNavFlex(isNavFlex == 'flex' ? 'none' : 'flex')}>
                <img src={menu} alt="" />
            </C.MenuMob>

        </C.Container>
    )
}