import React, { FC, ChangeEvent } from 'react'
import { InputProps } from './Input.types'

export const Input: FC<InputProps> = ({
    type = 'text',
    onChange,
    label,
    error,
    touched,
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <>
            <div className="mb-6 flex flex-col">
                <label className="label">{label}</label>
                <input type={type} className="input" onChange={handleChange} />
                {touched && error && <span className="error">{error}</span>}
            </div>
        </>
    )
}
