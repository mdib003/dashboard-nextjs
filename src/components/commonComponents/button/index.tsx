import Link from "next/link";

export type ButtonProps = {
    text: string;
    type: 'link' | 'button';
    btnClass: 'primary' | 'secondary';
    onClickHandler?: () => void;
    href?: string;
    linkType?: 'link1' | '',
    icon?: React.ReactNode
}


export const Button = ({ text, type, onClickHandler, btnClass, href = '/', linkType, icon }: ButtonProps) => {
    if (type === 'button') {
        return (
            <button className={`${btnClass === 'primary' ? 'primary-btn' : 'secondary-btn'}`} onClick={onClickHandler}>{text}</button>
        )
    } else if (type === 'link') {
        return (
            <Link className={`${linkType ? 'link1' : btnClass === 'primary' ? 'primary-btn' : 'secondary-btn'}`} href={href}>
                {icon && <span className="mar-r-8">{icon}</span>}{text}</Link>
        )
    }
}

