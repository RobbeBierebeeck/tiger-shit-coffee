import React, { FC, ChangeEvent } from 'react'
import { InputProps } from './Input.types'

export const Input: FC<InputProps> = ({ type = 'text', onChange, label }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <label className="label">{label}</label>
            <input type={type} className="input" onChange={handleChange} />
        </>
    )
}
