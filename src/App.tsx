import { Menu } from './componentes/pages/menu'
import { Home } from './componentes/pages/home'
import { About } from './componentes/pages/about'
import { Experience } from './componentes/pages/experience'
import { ProjectsContainer } from './componentes/pages/projects'
import { End } from './componentes/pages/rodape'

function App() {

  return (

    <div className="site">
      <Menu />

      <Home />

      <About />

      <Experience />

      <ProjectsContainer />

      <End />
    </div>

  )
}

export default App
