import Link from "next/link";

export type ButtonProps = {
    text: string;
    type: 'link' | 'button';
    btnClass: 'primary'| 'secondary';
    onClickHandler?: () => void;
    href?: string;
}


export const Button = ({text, type, onClickHandler, btnClass, href}: ButtonProps) => {
    if (type === 'button') {
    return (
        <button className={`${btnClass === 'primary' ? 'primary-btn' :  'secondary-btn'}`} onClick={onClickHandler}>{text}</button>
    )
    } else if (type === 'link') {
        return (
        <a className={`${btnClass === 'primary' ? 'primary-btn' :  'secondary-btn'}`} href={href}>{text}</a> 
        )
    }
}

