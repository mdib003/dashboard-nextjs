export type ImageProps = {
    src:string;
    alt: string;
    objFit: 'cover'| 'contain'
}

export const ImageComponent = ({src, alt, objFit}: ImageProps) => {
    return (
        <img src={src} alt={alt} className={`${objFit}`} width={'100%'} height={'100%'}/>
    )
}