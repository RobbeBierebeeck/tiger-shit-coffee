import { ICONS } from '~/shared/components/Icon/Icon.const'

export type ButtonProps = {
    children: React.ReactNode
    disabled?: boolean
    icon?: ICONS
    iconEnabled: boolean
    iconPosition?: 'left' | 'right'
    className?: string
    onClick?: () => void
}
