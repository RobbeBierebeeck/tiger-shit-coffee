import React, { FC } from 'react'
import { Icon } from '~/shared/components/Icon'
import { ICONS } from '~/shared/components/Icon/Icon.const'
import { NavigationProps } from './navigation.types'

export const Navigation: FC<NavigationProps> = ({ onLogout }) => {
    //TODO: Add routing to the navigation
    return (
        <nav className="mt-8">
            <ul className="w-full flex justify-center gap-8 ">
                <li className="flex gap-2 pb-4 cursor-pointer">
                    <Icon icon={ICONS.settings} />
                    Settings
                </li>
                <li
                    className="flex gap-2 pb-4 cursor-pointer"
                    onClick={onLogout}
                >
                    <Icon icon={ICONS.logout} />
                    Logout
                </li>
            </ul>
        </nav>
    )
}
