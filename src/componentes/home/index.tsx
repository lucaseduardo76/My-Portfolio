import img from '../../assets/image/foto.jpg'
import "./a.css"

export const Home = () => {
    return(
        <div className="container">
            <div className="left-side">
                <div className='text-home'>
                    <h2 className="home-text">OLÁ, EU SOU</h2>
                    <span className="name">LUCAS EDUARDO</span>
                    <h2 className="home-text">DESENVOLVEDOR FRONT-END</h2>
                </div>

                <div className="button-home">
                    <button>
                        <img src="#linkedinicon" alt="" />
                        <span>Linkedin</span>
                    </button>

                    <button>
                        <img src="#giticon" alt="" />
                        <span>Github</span>
                    </button>
                </div>
            </div>

            <div className="img-home">
                <img src={img} alt="" />
            </div>
        </div>
    )
}