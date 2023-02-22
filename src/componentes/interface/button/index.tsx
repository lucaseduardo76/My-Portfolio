import * as C from './style'

type Props = {
    link: string
    photo: string
    text: string
}

export const Button = (data: Props) => {
    return (
        <C.Button>
            <C.ButtonLink href={data.link} target="_blank">
                <img src={data.photo} alt="" />
                <C.ButtonText>{data.text}</C.ButtonText>
            </C.ButtonLink>
        </C.Button>
    )
}