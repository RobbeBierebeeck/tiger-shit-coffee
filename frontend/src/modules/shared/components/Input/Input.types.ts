import { INPUT_TYPES } from './input.const'

export type InputProps = {
    type: `${INPUT_TYPES}`
    label: string
    value: string
    touched: boolean | undefined
    name?: string
    placeholder?: string
    className?: string
    disabled?: boolean
    error?: string
    onChange: (value: string) => void
}
