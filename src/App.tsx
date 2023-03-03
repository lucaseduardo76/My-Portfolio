import { Menu } from './componentes/pages/menu'
import { Home } from './componentes/pages/home'
import { About } from './componentes/pages/about'
import { Experience } from './componentes/pages/experience'
import { ProjectsContainer } from './componentes/pages/projects'
import { End } from './componentes/pages/rodape'

import arrowTop from './assets/icons/arrowTop.svg'
import * as C from './AppStyle'
import { useState, useEffect } from 'react'

function App() {
  const [handleButtonTop, setHandleButtonTop] = useState('none');



  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setHandleButtonTop('flex')
      } else {
        setHandleButtonTop('none')
      }

    })
  }, [])

  const handleClickTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }



  return (
    <div >

      <C.ButtontoTop onClick={handleClickTop} visibility={handleButtonTop}>
        <C.ImgtoTop src={arrowTop} alt="" />
      </C.ButtontoTop>

      <div className="site">
        <Menu />

        <Home />

        <About />

        <Experience />

        <ProjectsContainer />

        <End />
      </div>
    </div>
  )
}

export default App
