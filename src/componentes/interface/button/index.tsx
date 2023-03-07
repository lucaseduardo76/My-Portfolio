import * as C from './style'

type Props = {
    link: string
    photo: string
    text: string
    size?: string
}

export const Button = (data: Props) => {

    const cas: string = data.size ? data.size : 'auto';

    return (
        <C.Button  >
            <C.ButtonLink href={data.link} target="_blank">
                <C.ImgStyled iconSize={cas} src={data.photo} alt="" />
                <C.ButtonText>{data.text}</C.ButtonText>
            </C.ButtonLink>
        </C.Button>
    )
}