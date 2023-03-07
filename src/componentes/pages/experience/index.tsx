import { useState } from 'react'
import arrow from './../../../assets/icons/arrow.svg'
import { CertificationList } from './certificados'
import * as C from './style'


type Props = {
    img: string,
    title: string,
    text: string,
    index: number
    hiddenCertificates: boolean
}

const Certificados = (data: Props) => {



    return (
        <C.CertificateBox
            img={data.img}
            index={data.index}
            showall={data.hiddenCertificates}
        >
            <C.BlackScreen>

                <C.BlackScreenTitle>{data.title}</C.BlackScreenTitle>
                <C.BlackScreenText>{data.text}</C.BlackScreenText>

            </C.BlackScreen>
        </C.CertificateBox>
    )
}


export const Experience = () => {

    const [showCertificates, setShowCertificates] = useState<boolean>(false)

    const handleClickSetShowing = () => {
        setShowCertificates(showCertificates ? false : true)
    }

    return (
        <C.Container id='exp'>



            <C.SecondContainer>
                <C.Title>EXPERIÊNCIA</C.Title>

                <C.ExpBoxText>
                    <C.ExpText>Em busca da minha primira expriência "oficial" !!</C.ExpText>
                </C.ExpBoxText>

                <C.Title id='certificate'>CERTIFICADOS</C.Title>
                <C.ContainerCertic>
                    {
                        CertificationList().map((item, key) => (
                            <Certificados
                                key={key}
                                index={key}
                                img={item.photo}
                                title={item.title}
                                text={item.text}
                                hiddenCertificates={showCertificates}
                            />
                        ))
                    }

                </C.ContainerCertic>

                <C.More onClick={handleClickSetShowing}>
                    {showCertificates && "Ver menos"} 
                    {!showCertificates && "Ver tudo"}
                    <C.ArrowSvg SeeAllLess={showCertificates} src={arrow} alt="" />
                </C.More>

                <C.FinalTextCertificate>Estou disponível para bater um papo, você pode entrar em contato comigo via e-mail: <span style={{ color: '#0098b3' }}>ilesds@gmail.com</span></C.FinalTextCertificate>

            </C.SecondContainer>

        </C.Container>
    )
}