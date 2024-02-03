import Link from "next/link";

export type ButtonProps = {
    text: string;
    type: 'link' | 'button';
    btnClass: 'primary' | 'secondary' | 'tertiary' | 'danger';
    onClickHandler?: () => void;
    href?: string;
    linkType?: 'link1' | '',
    icon?: React.ReactNode,
    className?: string
}


export const Button = ({ text, type, onClickHandler, btnClass, href = '/', linkType, icon, className }: ButtonProps) => {
    if (type === 'button') {
        return (
            <button className={`${btnClass === 'primary' ? 'primary-btn' : btnClass === 'secondary' ? 'secondary-btn' : btnClass === 'tertiary' ? 'tertiary' : 'danger'} ${className}`} onClick={onClickHandler}>{text}</button>
        )
    } else if (type === 'link') {
        return (
            <Link className={`${linkType ? 'link1' : btnClass === 'primary' ? 'primary-btn' : btnClass === 'secondary' ? 'secondary-btn' : btnClass === 'tertiary' ? 'tertiary' : 'danger'} ${className}`} href={href}>
                {icon && <span className="mar-r-8">{icon}</span>}{text}</Link>
        )
    }
}

