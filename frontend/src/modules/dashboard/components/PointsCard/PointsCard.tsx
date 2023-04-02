import React, { FC } from 'react'
import { PointsCardProps } from './PointsCard.types'

export const PointsCard: FC<PointsCardProps> = ({
    points = 0,
    title = '',
    className = '',
}) => {
    return (
        <div
            className={`w-full flex flex-col items-center py-14 gap-3 rounded-2xl bg-light-grey ${className}`}
        >
            <span className="h1">{points}</span>
            <span className="plain-text">{title}</span>
        </div>
    )
}
