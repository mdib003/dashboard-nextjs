export type SelectProps = {
    options: string[],
    cb: (value: any) => void,
    defaultValue?: string,
    name: string
}

export const SelectComponent = ({ options, cb, defaultValue, name }: SelectProps) => {
    return (
        <select onChange={cb} defaultValue={defaultValue} name={name}>
            {options?.map((opt, i) => {
                return <option value={opt} key={i}>{opt}</option>
            })}
        </select>
    )
}