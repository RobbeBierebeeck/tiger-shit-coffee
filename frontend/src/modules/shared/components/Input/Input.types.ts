import { INPUT_TYPES } from './input.const'

export type InputProps = {
    type: `${INPUT_TYPES}`
    label: string
    value: string
    name?: string
    placeholder?: string
    className?: string
    disabled?: boolean
    onChange: (value: string) => void
}
