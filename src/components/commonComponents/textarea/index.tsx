export type TextAreaProps = {
    description: string,
    onChangeHandler: (value: any) => void,
    name: string
}

export const TextAreaComponent = ({ description, onChangeHandler, name }: TextAreaProps) => {
    return (
        <textarea onChange={onChangeHandler} name={name} value={description || ''}>
           {/*  {description} */}
        </textarea>
    )
}