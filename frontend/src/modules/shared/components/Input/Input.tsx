import React, { FC, ChangeEvent } from 'react'
import { InputProps } from './Input.types'

export const Input: FC<InputProps> = ({ type = 'text', onChange, label }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <label className="flex flex-col gap-1.5">{label}</label>
            <input
                type={type}
                className="w-50 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange}
            />
        </>
    )
}
