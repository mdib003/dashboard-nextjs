export type TextProps = {
    text: string;   
    color?: 'primary' | 'secondary' | 'tertiary' | 'color-white';
    align?: 'text-center' | 'text-right' | 'text-left';
    boldType?: 'bold' | 'semibold',
    className?: string
}

export const TextComponent = ({text, align = 'text-left', color = 'color-white', boldType, className = 'mar-b-8'}: TextProps) => {
    return (
        <p className={`${align} ${color === 'primary' ? 'color1' : color === 'secondary' ?  'color2' : color === 'tertiary' ? 'color3': 'color-white'} ${boldType} ${className}`}>{text}</p>
    )
}