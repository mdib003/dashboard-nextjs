import Link from "next/link";

export type CTAProps = LinkProps | ButtonProps

type GenericProps = {
    text: string;
    btnClass: 'primary' | 'secondary' | 'tertiary' | 'danger';
    icon?: React.ReactNode,
    className?: string
}

type LinkProps = GenericProps & {
    href: string;
    linkType?: 'link1' | '',
    type: 'link'
}

type ButtonProps = GenericProps & {
    onClickHandler: () => void;
    type: 'button'
}


export const CTA = (props: CTAProps) => {
    if (props.type === 'button') {
        return (
            <button className={`${props.btnClass === 'primary' ? 'primary-btn' : props.btnClass === 'secondary' ? 'secondary-btn' : props.btnClass === 'tertiary' ? 'tertiary' : 'danger'} ${props.className}`} onClick={props?.onClickHandler}>{props.text}</button>
        )
    } else if (props.type === 'link') {
        return (
            <Link className={`${props.linkType ? 'link1' : props.btnClass === 'primary' ? 'primary-btn' : props.btnClass === 'secondary' ? 'secondary-btn' : props.btnClass === 'tertiary' ? 'tertiary' : 'danger'} ${props.className}`} href={props.href}>
                {props.icon && <span className="mar-r-8">{props.icon}</span>}{props.text}</Link>
        )
    }
}

