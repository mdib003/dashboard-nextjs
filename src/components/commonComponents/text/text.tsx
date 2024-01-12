export type TextProps = {
    text: string;   
    color: 'primary' | 'secondary' | 'tertiary';
    align?: 'text-center' | 'text-right' | 'text-left';
    boldType?: 'bold' | 'semibold'
}

export const TextComponent = ({text, align = 'text-left', color, boldType}: TextProps) => {
    return (
        <p className={`${align} ${color === 'primary' ? 'color1' : color === 'secondary' ?  'color2' : 'color3'} ${boldType}`}>{text}</p>
    )
}