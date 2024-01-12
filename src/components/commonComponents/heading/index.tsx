export type HeadingProps = {
    text: string;
    type: 'h1' | 'h2' | 'h3' | 'h4';
    color?: 'primary' | 'secondary' | 'tertiary' | 'color-white';
    align?: 'text-center' | 'text-right' | 'text-left';
}

export const Heading = ({ text, type, color = 'color-white', align = 'text-left' }: HeadingProps) => {
    switch (type) {
        case 'h1':
            return <h1 className={`${color === 'primary' ? 'color1' : color === 'secondary' ? 'color2' : color === 'tertiary' ? 'color3' : 'color-white'} ${align}`} >{text}</h1>;
        case 'h2':
            return <h2 className={`${color === 'primary' ? 'color1' : color === 'secondary' ? 'color2' : color === 'tertiary' ? 'color3' : 'color-white'} ${align}`}>{text}</h2>
        case 'h3':
            return <h3 className={`${color === 'primary' ? 'color1' : color === 'secondary' ? 'color2' : color === 'tertiary' ? 'color3' : 'color-white'} ${align}`}>{text}</h3>
        case 'h4':
            return <h4 className={`${color === 'primary' ? 'color1' : color === 'secondary' ? 'color2' : color === 'tertiary' ? 'color3' : 'color-white'} ${align}`}>{text}</h4>
    }
}