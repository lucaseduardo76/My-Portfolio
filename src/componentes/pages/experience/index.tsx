import './a.css'
import typescript from './image/typescript.jpg'
import javascript from './image/javascript.jpg'
import htmlcss from './image/htmlcss.jpg'
import { CertificationList } from './certificados'

type Props = {
    img:string,
    title:string,
    text:string
}

const Certificados = (data:Props) => {

    return (
        <div className="img">
            <div className="black-all">
                <div className="black">
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                </div>
            </div>
        </div>
    )
}


export const Experience = () => {
    return (
        <div className="container">
            <div className="box">
                <h2 className="title">EXPERIÊNCIA</h2>

                <div className="box-text">
                    <h2>Em busca da minha primira expriência "oficial" !!</h2>
                </div>

                <h2 className="title">CERTIFICADOS</h2>
                <div className="photo-box">
                   {
                    CertificationList().map((item, key) => (
                        <Certificados  
                            key={key}
                            img={item.photo}
                            title={item.title}
                            text={item.text}
                        />
                    ))
                    }
                   
                </div>

                <div className='text-end'>Estou disponível para bater um papo, você pode entrar em contato comigo via e-mail: <span>ilesds@gmail.com</span></div>

            </div>
        </div>
    )
}