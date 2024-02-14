export type InputProps = {
    placeholder: string,
    inputValue: string | number,
    inputName: string,
    onChangeHandler: (value: any) => void
}

export const InputComponent = ({ placeholder, inputValue, inputName, onChangeHandler }: InputProps) => {
    return (
        <input placeholder={placeholder} value={inputValue} name={inputName} onChange={onChangeHandler} />
    )
}

